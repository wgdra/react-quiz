import { useState } from "react";
import "./Auth.scss";
import ImageLogin from "../../assets/image/image-login.png";
import { Container, Button, Form, Image } from "react-bootstrap";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doLogin } from "../../redux/action/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cancel = useNavigate();
  const login = useNavigate();

  const dispatch = useDispatch();

  // Handle
  const handleCancel = () => {
    cancel("/");
  };

  const handleLogin = async () => {
    let data = await postLogin(email, password);
    if (data && data.EC !== 0) {
      return toast.error("Email hoặc Mật khẩu chưa chính xác");
    } else {
      dispatch(doLogin(data));
      toast.success("Đăng nhập thành công!");
      login("/");
    }
  };

  return (
    <div>
      <section className="vh-100">
        <Container className="container-fluid d-flex justify-content-center align-items-center h-custom">
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{
              padding: "42px 0px",
              borderRadius: "5px",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
              backgroundColor: "#f7f7f7",
              width: "75vw",
            }}
          >
            <div className="col-md-9 col-lg-6 col-xl-5">
              <Image
                src={ImageLogin}
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="form-login col-md-8 col-lg-6 col-xl-4 offset-xl-1 mb-3">
              <Form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <Form.Label className="lead fw-normal mb-0 me-3">
                    Đăng nhập với
                  </Form.Label>
                  <Button
                    type="button"
                    className="btn btn-primary btn-floating mx-1 rounded-circle"
                    style={{ padding: "6px" }}
                  >
                    <BsFacebook style={{ fontSize: "24px" }} />
                  </Button>

                  <Button
                    type="button"
                    className="btn btn-primary btn-floating mx-1 rounded-circle"
                    style={{ padding: "6px" }}
                  >
                    <BsGoogle style={{ fontSize: "24px" }} />
                  </Button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Hoặc</p>
                </div>

                {/* <!-- Email input --> */}
                <Form.Group className="form-outline mb-4">
                  <Form.Label style={{ fontSize: "24px" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    className="form-control-lg"
                    placeholder="Địa chỉ Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                {/* <!-- Password input --> */}
                <Form.Group className="form-outline mb-3">
                  <Form.Label style={{ fontSize: "24px" }}>Mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    className="form-control-lg"
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <Form.Group className="form-check mb-0">
                    <Form.Check className="me-2" value="radio" id="" />
                    <Form.Label>Lưu đăng nhập</Form.Label>
                  </Form.Group>
                  <a href="/login" className="text-body link-danger">
                    Quên mật khẩu ?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2 d-flex justify-content-end">
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
                    onClick={() => handleLogin()}
                  >
                    Đăng nhập
                  </Button>
                </div>
                <p
                  className="small fw-bold mt-2 pt-1 mb-0"
                  style={{ textAlign: "end" }}
                >
                  Bạn chưa có tài khoản?{" "}
                  <a
                    href="/register"
                    className="link-danger"
                    style={{ cursor: "pointer" }}
                  >
                    Đăng ký
                  </a>
                </p>
              </Form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Login;
