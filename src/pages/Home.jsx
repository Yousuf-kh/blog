import React from "react";
import Main from "../layout/Main";
import Hero from "../components/Hero";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Newletter from "../components/Newletter";

const Home = () => {
  return (
    <Main>
      <Hero />
      <About />
      <Blogs />
      <Newletter />
    </Main>
  );
};

export default Home;
