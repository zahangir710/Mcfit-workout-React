import { useEffect, useState } from "react";

const useData = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/86363337-90b5-486c-bfcf-cb12d887dec3")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return [courses];
};
export default useData;
