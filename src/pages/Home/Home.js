import React from "react";
import Banner from "../Header/Banner/Banner";

import useAuth from "../../Hooks/useAuth";
import useData from "../../Hooks/useData";
import Course from "../CoursesOffered/Course/Course";
import { Container } from "react-bootstrap";
import "./Home.css";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const [courses] = useData();
  return (
    <div>
      <Banner></Banner>
      <Container className="display">
        {courses.slice(0, 4).map((course) => (
          <Course course={course} key={course.id}></Course>
        ))}
      </Container>
      <div className="container d-flex justify-content-center">
        <Link to="/courses">
          <Button
            variant="primary"
            type="submit"
            className="bg-warning  p-2 mt-4 mb-3 border-0 rounded"
          >
            Check all Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
