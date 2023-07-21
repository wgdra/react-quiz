import { useEffect, useState } from "react";
import { putDataUser } from "../../../services/apiService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./Modal.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";

const ModalUpdateUser = (props) => {
  const {
    showUpdateModal,
    setShowUpdateModal,
    dataUpdate,
    fetchListUser,
    resetDataUpdate,
  } = props;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!_.dataUpdate) {
      setEmail(dataUpdate.email);
      setUsername(dataUpdate.username);
      setRole(dataUpdate.role);
    }
  }, [dataUpdate]);

  // Handle
  const handleClose = () => {
    setShowUpdateModal(false);
    setUsername("");
    setRole("");
    setImage("");
    resetDataUpdate();
  };

  const handleUpdateUser = async () => {
    let data = await putDataUser(dataUpdate.id, username, role, image);
    if (data && data.EC !== 0) {
      return toast.error("Lỗi");
    } else {
      handleClose();
      toast.success("Cập nhật thành công");
      fetchListUser();
    }
  };

  return (
    <>
      <Modal
        show={showUpdateModal}
        onHide={handleClose}
        size="lg"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Cập Nhật Tài Khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  disabled
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustomUsername">
                <Form.Label>Tên người dùng:</Form.Label>
                <Form.Control
                  placeholder="Nhập tên"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridRole">
                <Form.Label>Loại tài khoản:</Form.Label>
                <Form.Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Avatar"
                  files={image}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="btn btn-warning" onClick={() => handleUpdateUser()}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;
