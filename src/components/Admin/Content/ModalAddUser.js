import { useState } from "react";
import { portDataUser } from "../../../services/apiService";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import "./Modal.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCheck } from "react-icons/bs";

const ModalAddUser = (props) => {
  const { show, setShow, fetchListUser } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");

  // Validate
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function validatePassword(password) {
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/.test(password) &&
      password.length > 6
    );
  }

  const checkValidateEmail = () => {
    const isEmail = validateEmail(email);

    if (!isEmail) {
      return <span> bắt buộc</span>;
    } else {
      return <BsCheck color="var(--primary)" size="20px" />;
    }
  };

  const checkValidatePassword = () => {
    const isPassword = validatePassword(password);

    if (!isPassword) {
      return ` (trên 6 kí tự, chữ hoa, số, kí tự đặc biệt)`;
    } else {
      return <BsCheck color="var(--primary)" size="20px" />;
    }
  };

  // Handle
  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("");
    setImage("");
  };

  const handleAddUser = async () => {
    const isValidateEmail = validateEmail(email);
    const isValidatePassword = validatePassword(password);

    if (!isValidateEmail || !isValidatePassword) {
      return toast.error("Lỗi thông tin");
    }

    //Call API

    let data = await portDataUser(email, password, username, role, image);
    if (data && data.EC !== 0) {
      return toast.error("Email đã được sử dụng");
    } else {
      toast.success("Thêm thành công!");
      handleClose();
      fetchListUser();
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Thêm Tài Khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Email:
                  {checkValidateEmail()}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Mật khẩu:
                  {checkValidatePassword()}
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Row>

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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="btn btn-primary" onClick={() => handleAddUser()}>
            Thêm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddUser;
