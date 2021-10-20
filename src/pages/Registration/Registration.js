import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Registration = () => {
  const { signUpwithEmail, googleSignIn, user } = useAuth();
  // const {updateName}=useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // update user name from registration form

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // const handleFirstName = (e) => {
  //   setFirstName(e.target.value);
  // };
  // const handleLastName = (e) => {
  //   setLastName(e.target.value);
  // };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleGoogleLogin = () => {
    googleSignIn();
  };
  const handleRegistration = (e) => {
    setError("");
    e.preventDefault();
    if (password.length < 6) {
      return setError("Password must contain at least 6 characters!!!");
    }
    signUpwithEmail(email, password);
    // updateName(firstName, lastName);
  };
  if (user.email) {
    return <Redirect to="/home" />;
  }
  return (
    <Container className="my-5">
      <Row className="d-flex justify-content-center">
        <Col lg={6} md={6} xs={10}>
          <Form onSubmit={handleRegistration}>
            <h2 className="my-4">Registration</h2>
            <Row className="mb-3">
              <Form>
                <Row>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      // onBlur={handleFirstName}
                      placeholder="First name"
                    />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      // onBlur={handleLastName}
                      placeholder="Last name"
                    />
                  </Col>
                </Row>
              </Form>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onBlur={handleEmail}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={handlePassword}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <p className="text-danger">{error}</p>
            <small>Already Registered?</small>
            <Link to="/login">
              <small className="text-primary ms-2 hover-text">
                <u>Login here</u>
              </small>
            </Link>
            <br />
            <Button
              variant="primary"
              type="submit"
              className="bg-warning w-25 p-1 mt-4 mb-3"
            >
              Register
            </Button>
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
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
