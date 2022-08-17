import React from "react";
import style from "../styles/Home.module.css";
import { TbCalendarTime } from "react-icons/tb";
import { RiCompass3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <div
      className={`row justify-content-center align-teims-center ${style.footer}`}
    >
      <div className="col-4 text-center">
        <TbCalendarTime
          size={27}
          color={router.pathname == "/" ? "#2495FF" : "#979797"}
        />
        <br />
        <small>My Booking</small>
      </div>
      <div className={`col-4 text-center ${style.goFlight}`}>
        <RiCompass3Fill size={55} color="white" />
      </div>
      <div className="col-4 text-center">
        <CgProfile
          size={28}
          color={router.pathname == "/profile" ? "#2495FF" : "#979797"}
        />
        <br />
        <small>Profile</small>
      </div>
    </div>
  );
};

export default Footer;
