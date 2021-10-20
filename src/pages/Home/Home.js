import React from "react";
import Banner from "../Header/Banner/Banner";
import useFirebase from "../../Hooks/useFirebase";

const Home = () => {
  const { user } = useFirebase();
  return (
    <>
      <Banner></Banner>
      <h1>{user.email}</h1>
    </>
  );
};

export default Home;
