import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = ({ children }) => {
  return (
    <div>
      <div className="pt-[10vh]">{children}</div>
    </div>
  );
};

export default Main;
