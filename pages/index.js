import React from "react";
import style from "../styles/Home.module.css";
import Footer from "../component/footer";

const Explore = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className={`col-md-4 ${style.bodyWrapper}`}></div>
        <Footer />
      </div>
    </>
  );
};

export default Explore;
