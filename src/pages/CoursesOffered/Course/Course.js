import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Course = (props) => {
  const { name, details, img, id } = props.course;
  return (
    <div className="mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" className="img-fluid" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{details.slice(0, 30)}</Card.Text>
          <Link to={`/coursedetails/${id}`}>
            <Button className="bg-warning rounded" variant="primary">
              Learn More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
