import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoginImg from "../img/LogIn.jpg";
// import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logInUsingGoogle, emailAndPasswordSignIn } = useAuth();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    logInUsingGoogle();
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    emailAndPasswordSignIn(email, password);
  };
  return (
    // <div style={{height:"100vh"}}>
    //

    // </div>

    <div className="container" style={{ height: "70vh" }}>
      <h1 className="text-center mt-5">Please Log in</h1>
      <div class="row">
        <div class="col-md-6">
          <img className="img-fluid" src={LoginImg} alt="" srcset="" />
        </div>
        <div class="col-md-6">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onBlur={handleEmail}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onBlur={handlePassword}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleLogIn}>
              Submit
            </Button>

            <p className="text-center">
              {" "}
              <strong>or SignUp with Google</strong>{" "}
            </p>
            <p>
              New on Here?
           <Link to="/signup">Register Now</Link>{" "}
        </p>
            <div className="d-grid gap-2">
              <Button variant="dark" size="lg" onClick={handleGoogleLogIn}>
                <FcGoogle /> SignUp
              </Button>
            </div>

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

export default Login;
