import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";




// import { Link } from "react-router-dom";
import signInImg from "../img/43071.jpg";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";


const SignUp = () => {

  const { logInUsingGoogle, signUpWithEmailAndPassword } = useAuth();

  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    logInUsingGoogle();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpWithEmailAndPassword(email, password, name);
  };
  // handleSubmit.addEventListener("click", setNav(true));
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  // const setUserName = () => {
  //   setDisplayName(name);
  // };
  console.log(name);
  
  return (
    <div className="container mt-5 p-5" style={{ height: "auto" }}>
      <div class="row">
        <div class="col">
          <img className="img-fluid m-5 " src={signInImg} alt="" srcset="" />
        </div>
        <div class="col">
          <Form className="mb-5 p-5" >
            <h2 className="text-center m-4 p-4">Register Now</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control placeholder="name" onBlur={handleNameChange} />
              </Form.Group>

             
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange} required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" required/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} required/>
              </Form.Group>

              
            </Row>

            <>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
              <br />
              <p className="text-center">
                {" "}
                <strong>or SignUp with Google</strong>{" "}
              </p>
              <div className="d-grid gap-2">
                <Button variant="dark" size="lg" onClick={handleGoogleLogIn}>
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
