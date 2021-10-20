import React from "react";
import { Container } from "react-bootstrap";
import useData from "../../../Hooks/useData";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses] = useData();
  return (
    <div>
      <Container className="display">
        {courses.map((course) => (
          <Course course={course} key={course.id}></Course>
        ))}
      </Container>
    </div>
  );
};


export default Courses;
