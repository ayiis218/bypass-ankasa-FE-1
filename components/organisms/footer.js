import React from "react";
import style from "../../styles/Home.module.css";
import { TbCalendarTime } from "react-icons/tb";
import { RiCompass3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  return (
    <div
      className={`row justify-content-center align-teims-center ${style.footer}`}
    >
      <div className="col-4 text-center">
        <Link href="/my-booking" passHref>
          <TbCalendarTime
            size={27}
            color={router.pathname == "/my-booking" ? "#2495FF" : "#979797"}
          />
        </Link>
        <br />
        <small
          style={{
            color: router.pathname == "/my-booking" ? "#2495FF" : "#979797",
          }}
        >
          My Booking
        </small>
      </div>
      <div className={`col-4 text-center ${style.goFlight}`}>
        <Link href="/" passHref>
          <RiCompass3Fill size={55} color="white" />
        </Link>
      </div>
      <div className="col-4 text-center">
        <Link href="/profile" passHref>
          <CgProfile
            size={28}
            color={router.pathname == "/profile" ? "#2495FF" : "#979797"}
          />
        </Link>
        <br />
        <small
          style={{
            color: router.pathname == "/profile" ? "#2495FF" : "#979797",
          }}
        >
          Profile
        </small>
      </div>
    </div>
  );
};

export default Footer;
