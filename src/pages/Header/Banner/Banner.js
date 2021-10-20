import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container text-center banner-text">
        <h1 className="header-font mb-5">
          MORE
          <br />
          FLEXIBILITY
        </h1>
        <h5 className="fw-bold">
          The McFIT Flex tariffs, can now be cancelled on a monthly basis!
        </h5>
        <Link to="/membership">
          <Button
            variant="primary"
            size="lg"
            className="bg-warning mt-5 w-25 p-2 rounded fs-4 fw-bold text-light"
          >
            Learn More
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
