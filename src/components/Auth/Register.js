import { useState } from "react";
import "./Auth.scss";
import ImageRegister from "../../assets/image/image-register.png";
import { Container, Button, Form, Image } from "react-bootstrap";
import {
  BsEnvelopeFill,
  BsFillPersonFill,
  BsLockFill,
  BsKeyFill,
  BsCheck,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postRegister } from "../../services/apiService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("USER");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState(" ");

  const cancel = useNavigate();
  const register = useNavigate();
  //Validate
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (password) => {
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/.test(password) &&
      password.length > 6
    );
  };

  const checkValidateEmail = () => {
    const isEmail = validateEmail(email);

    if (!isEmail) {
      return <span style={{ fontSize: "16px", color: "red" }}> *bắt buộc</span>;
    } else {
      return <BsCheck color="var(--primary)" size="20px" />;
    }
  };

  const checkValidatePassword = () => {
    const isPassword = validatePassword(password);

    if (!isPassword) {
      return (
        <span style={{ fontSize: "16px" }}>
          {" "}
          (trên 6 kí tự bao gồm chữ hoa, số, kí tự đặc biệt)
        </span>
      );
    } else {
      return <BsCheck color="var(--primary)" size="20px" />;
    }
  };

  const checkRepeatPassword = () => {
    if (password === repeatpassword) {
      return <BsCheck color="var(--primary)" size="20px" />;
    }
  };

  //Handle
  const handleCancel = () => {
    cancel("/");
  };
  const handleRegister = async () => {
    const checkPassword = validatePassword(password);
    let res = await postRegister(email, username, password);

    if (res && res.EC !== 0) {
      return toast.error("Email hoặc Mật khẩu chưa hợp lệ");
    } else if (!checkPassword && password !== repeatpassword) {
      return toast.error("Mật khẩu chưa hợp lệ");
    } else {
      toast.success("Đăng ký thành công");
      register("/login");
    }
  };

  return (
    <>
      <section className="vh-100">
        <Container className="container h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div
              style={{
                padding: "42px 0px",
                borderRadius: "5px",
                boxShadow:
                  "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                backgroundColor: "#f7f7f7",
                width: "75vw",
              }}
            >
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <h2 className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Đăng Ký
                  </h2>

                  <Form className="mx-1 mx-md-4">
                    <Form.Group
                      className="d-flex flex-row align-items-end"
                      style={{ marginBottom: "10px" }}
                    >
                      <BsEnvelopeFill
                        style={{ fontSize: "30px", margin: "10px" }}
                      />
                      <div className="flex-fill">
                        <Form.Label style={{ fontSize: "20px" }}>
                          Email
                          {checkValidateEmail()}
                        </Form.Label>
                        <Form.Control
                          type="email"
                          className="form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group
                      className="d-flex flex-row align-items-end"
                      style={{ marginBottom: "10px" }}
                    >
                      <BsFillPersonFill
                        style={{ fontSize: "30px", margin: "10px" }}
                      />
                      <div className="flex-fill">
                        <Form.Label style={{ fontSize: "20px" }}>
                          Tên
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control-lg"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group
                      className="d-flex flex-row align-items-end"
                      style={{ marginBottom: "10px" }}
                    >
                      <BsLockFill
                        style={{ fontSize: "30px", margin: "10px" }}
                      />
                      <div className="flex-fill">
                        <Form.Label style={{ fontSize: "20px" }}>
                          Mật khẩu
                          {checkValidatePassword()}
                        </Form.Label>
                        <Form.Control
                          type="password"
                          className="form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group
                      className="d-flex flex-row align-items-end"
                      style={{ marginBottom: "10px" }}
                    >
                      <BsKeyFill style={{ fontSize: "30px", margin: "10px" }} />
                      <div className="flex-fill">
                        <Form.Label style={{ fontSize: "20px" }}>
                          Nhập lại mật khẩu
                          {checkRepeatPassword()}
                        </Form.Label>
                        <Form.Control
                          type="password"
                          className="form-control-lg"
                          onChange={(e) => setRepeatpassword(e.target.value)}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group
                      className="form-check d-flex mb-4"
                      style={{ marginLeft: "50px" }}
                    >
                      <Form.Check />
                      <p>
                        Tôi đồng ý với tất cả <a href="#">Điều khoản</a>
                      </p>
                    </Form.Group>

                    <Form.Group className="d-flex justify-content-end">
                      <Button
                        variant="btn btn-secondary btn-lg"
                        style={{ minWidth: "108px" }}
                        onClick={() => handleCancel()}
                      >
                        Hủy
                      </Button>
                      <Button
                        variant="btn btn-primary btn-lg"
                        style={{ minWidth: "108px", marginLeft: "16px" }}
                        onClick={() => handleRegister()}
                      >
                        Đăng Ký
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
                <Image
                  className="d-flex align-items-center order-1 order-lg-2"
                  style={{
                    width: "630px",
                    height: "630px",
                    marginLeft: "30px",
                  }}
                  src={ImageRegister}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Register;
