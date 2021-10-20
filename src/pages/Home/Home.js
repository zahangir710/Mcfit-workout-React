import React from "react";
import Banner from "../Header/Banner/Banner";

import useAuth from "../../Hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <Banner></Banner>
      <h1>{user.email}</h1>
    </>
  );
};

export default Home;
