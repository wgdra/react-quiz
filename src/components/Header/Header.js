import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
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
              <button className="btn btn-login">Đăng nhập</button>
              <button className="btn btn-register">Đăng ký</button>
              {/* <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Hồ Sơ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Trợ Giúp & Hỗ Trợ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cài đặt</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Đăng Xuất</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
