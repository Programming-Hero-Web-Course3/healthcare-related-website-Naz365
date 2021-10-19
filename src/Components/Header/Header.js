import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand> <strong>Naz Health Center</strong> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>
               <strong>Home</strong>
            </Nav.Link>
            <Nav.Link as={Link} to={"/about-us"}>
              AboutUs
            </Nav.Link>
            <Nav.Link as={Link} to={"/singup"}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to={"/signin"}>
              SignIn
            </Nav.Link>
            <Nav.Link as={Link} to={"/FAQ"}>
              FAQ
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
