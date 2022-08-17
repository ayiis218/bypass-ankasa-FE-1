import React from "react";
import style from "../styles/Home.module.css";
import { TbCalendarTime } from "react-icons/tb";
import { RiCompass3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  return (
    <div
      className={`row justify-content-center align-teims-center ${style.footer}`}
    >
      <div className="col-4 text-center">
        <TbCalendarTime size={27} color="#979797" />
        <br />
        <small>My Booking</small>
      </div>
      <div className={`col-4 text-center ${style.goFlight}`}>
        <RiCompass3Fill size={55} color="white" />
      </div>
      <div className="col-4 text-center">
        <CgProfile size={28} color="#979797" />
        <br />
        <small>Profile</small>
      </div>
    </div>
  );
};

export default Footer;
