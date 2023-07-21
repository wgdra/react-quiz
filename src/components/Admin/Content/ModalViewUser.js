import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./Modal.scss";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import _ from "lodash";

const ModalViewUser = (props) => {
  const { show, setShow, dataView } = props;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (!_.dataView) {
      setEmail(dataView.email);
      setUsername(dataView.username);
      setRole(dataView.role);
      setImage("");
      if (dataView.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
      }
    }
  }, [dataView]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Thông Tin Tài Khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" disabled value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustomUsername">
              <Form.Label>Tên người dùng:</Form.Label>
              <Form.Control disabled value={username} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridRole">
              <Form.Label>Loại tài khoản:</Form.Label>
              <Form.Control disabled value={role} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Avatar</Form.Label>
              <Form>
                <img
                  src={previewImage}
                  style={{ width: "300", height: "300px" }}
                />
              </Form>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewUser;
