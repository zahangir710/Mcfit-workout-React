import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import Logo from "../../../Images/logo.png";
import "./GymNavber.css";

const Navber = () => {
  const { user, logOut } = useFirebase();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/home" activeClassName="selected">
          <img className="logo" src={Logo} alt="" />
          <span className="ms-2 fs-3">McFIT</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/membership">
              Membership
            </Nav.Link>
            <Nav.Link as={Link} to="/trailtraining">
              Trail Training
            </Nav.Link>
            <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>
          </Nav>
          <Nav>
            {user.email ? (
              <Nav.Link onClick={logOut} className="text-light" as={Link} to="">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link
              eventKey={2}
              as={Link}
              to="/helpandsupport"
              activeClassName="selected"
            >
              Help and Support
            </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/">
              {user.email}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
