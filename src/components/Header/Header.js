import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar-container">
        <Container>
          <NavLink to="/" className="navbar-brand">
            React
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/user" className="nav-link">
                User
              </NavLink>
              <NavLink to="/admin" className="nav-link">
                Admin
              </NavLink>
            </Nav>
            <Nav>
              {isAuthenticated === false ? (
                <>
                  <button
                    className="btn btn-login"
                    onClick={() => navigate("/login")}
                  >
                    Đăng nhập
                  </button>
                  <button
                    className="btn btn-register"
                    onClick={() => navigate("/register")}
                  >
                    Đăng ký
                  </button>
                </>
              ) : (
                <>
                  <NavDropdown title="Tài khoản" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Hồ Sơ
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Trợ Giúp & Hỗ Trợ
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Cài đặt
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Đăng Xuất
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
