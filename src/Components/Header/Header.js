import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="primary" variant="dark"  expand="lg">
        <Container fluid>
          <Navbar.Brand>
            {" "}
            <strong>Naz Health Center</strong>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Nav.Link as={Link} to={"/home"}>
                <strong>Home</strong>
              </Nav.Link>
              <Nav.Link as={Link} to={"/about-us"}>
                AboutUs
              </Nav.Link>
              <Nav.Link as={Link} to={"/FAQ"}>
                FAQ
              </Nav.Link>
              {user.email ? (
                <>
                  {" "}
                  {user.displayName ? (
                    <span className="me-2 pt-2 text-light">
                      Hello {user.displayName}
                    </span>
                  ) : (
                    <span className="me-2 pt-2 text-light">Your account</span>
                  )}
                  <button className="btn btn-danger" onClick={logOut}>
                    {" "}
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <Nav.Link as={Link} to={"/login"}>
                    Login
                  </Nav.Link>
                  {/* <Link to="/login" className="nav-link">
                      Login
                    </Link> */}
                  <Nav.Link as={Link} to={"/signup"}>
                    SignUp
                  </Nav.Link>
                  {/* <Link to="/register" className="nav-link">
                      Sign Up
                    </Link> */}{" "}
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
