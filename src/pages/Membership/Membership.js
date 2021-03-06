import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./Membership.css";

const Membership = () => {
  return (
    <div className="membership-banner">
      <div className="container text-center banner-text">
        <h3 className="header-font mb-5">Train how, when and where you want</h3>
        <h5 className="fw-bold">From only 19.90 € *</h5>
        <Link to="/login">
          <Button
            variant="primary"
            size="lg"
            className="bg-warning mt-5 w-25 p-2 rounded fs-4 fw-bold text-light"
          >
            Register Now
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Membership;
