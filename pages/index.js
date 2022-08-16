import React from "react";
import style from "../styles/Home.module.css";
import Footer from "../component/footer";
import { FiSearch } from "react-icons/fi";
import HomeHeader from "../component/homeHeader";

const Explore = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className={`col-md-4 ${style.bodyWrapper}`}>
          <HomeHeader />
          <div className="container">
            <div id="inputSearchHome" className="row mt-3">
              <div className="input-group input-group-lg">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  <FiSearch size={30} color="#A3A3A3" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Where you want to go?"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Explore;
