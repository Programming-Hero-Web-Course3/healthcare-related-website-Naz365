import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import signInImg from "../img/43071.jpg";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="container mt-5 p-5" style={{ height: "auto" }}>
      <div class="row">
        <div class="col">
          <img className="img-fluid m-5 " src={signInImg} alt="" srcset="" />
        </div>
        <div class="col">
          <Form className="mb-5 p-5">
            <h2 className="text-center m-4 p-4">Register Now</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control placeholder="First name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Control placeholder="Last name" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Submit
                </Button>
              </div>
              <br />
              <p className="text-center">
                {" "}
                <strong>or SignUp with Google</strong>{" "}
              </p>
              <div className="d-grid gap-2">
                <Button variant="dark" size="lg">
                  <FcGoogle /> SignUp
                </Button>
              </div>
            </>
            <br />
            <Form.Text className="text-muted text-center">
              <p>We'll never share your information with anyone else.</p>
            </Form.Text>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
