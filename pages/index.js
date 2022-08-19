import React from "react";
import style from "../styles/Home.module.css";
import { FiSearch } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/organisms/footer";
import Header from "../components/organisms/header";
import TrendingDestinations from "../components/organisms/trendingDestinations";
import TopTenDestinations from "../components/organisms/topTenDestinations";

const Explore = () => {
  return (
    <>
      <div className={`row pt-4 justify-content-center ${style.bodyWrapper}`}>
        <div className={`col-md-4 p-0 ${style.exploreWrapper}`}>
          <div className={`container ${style.fixHeight}`}>
            <Header title={"Explore"} />
            <div className="container py-4">
              <div id="inputSearchHome" className="row mt-4">
                <div className="input-group input-group-lg">
                  <span className="input-group-text" id="inputGroup-sizing-lg">
                    <FiSearch size={30} color="#A3A3A3" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    placeholder="Where you want to go ?"
                  />
                </div>
              </div>
              <div className="py-4">
                <TrendingDestinations />
              </div>
              <TopTenDestinations />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Explore;
