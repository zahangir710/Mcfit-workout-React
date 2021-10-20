import React from "react";
import { Button } from "react-bootstrap";

import { FaFrownOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="fs-1 fw-bold">404 Not Found</h1>
      <FaFrownOpen className="text-warning fs-1 my-3" />
      <br />
      <Link to="/home">
        <Button className="text-light fw-bold bg-dark border-0 mt-2">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
