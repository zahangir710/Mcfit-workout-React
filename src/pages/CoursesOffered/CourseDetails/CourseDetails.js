import React from "react";
import { useParams } from "react-router";
import useData from "../../../Hooks/useData";

const CourseDetails = () => {
  const { courseId } = useParams();
  const { courses } = useData;

  return (
    <div className="container">
      <h1 className="text-center my-5">This is course details {courseId} </h1>
    </div>
  );
};

export default CourseDetails;
