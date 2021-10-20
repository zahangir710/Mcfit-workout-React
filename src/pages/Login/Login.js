import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn, loginWithEmail, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();

    loginWithEmail(email, password);
  };
  const handleGoogleLogin = () => {
    googleSignIn();
  };
  if (user.email) {
    return <Redirect to="/home" />;
  }
  return (
    <Container className="my-5">
      <Row className="d-flex justify-content-center">
        <Col lg={4} md={6} xs={8}>
          <Form onSubmit={handleLogin}>
            <h2 className="my-4">Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmail}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePassword}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <small>Don't have an account?</small>
            <Link to="/registration">
              <small className="text-primary ms-2 hover-text">
                <u>Register now</u>
              </small>
            </Link>
            <br />
            <Button
              variant="primary"
              type="submit"
              className="bg-warning w-25 p-1 mt-4 mb-3 border-0"
            >
              Login
            </Button>
          </Form>
          <p>or</p>
          <p className="mt-2">
            Sign in with{" "}
            <small
              onClick={handleGoogleLogin}
              className="text-primary hover-text"
            >
              {" "}
              Google
            </small>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
