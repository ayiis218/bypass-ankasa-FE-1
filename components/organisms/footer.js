import React from "react";
import style from "../../styles/Home.module.css";
import { TbCalendarTime } from "react-icons/tb";
import { RiCompass3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import Swal from "sweetalert2";

const Footer = () => {
  const router = useRouter();
  const loggedInUserState = useSelector((state) => state.loggedInUser);
  const store = useSelector((state) => state);
  const auth = store?.auth?.token;
  const { user } = loggedInUserState;

  console.log("auth token", auth);
  console.log("user data logged", user);

  const handleAuthBooking = () => {
    if (auth === null) {
      Swal.fire({
        icon: "info",
        showCancelButton: true,
        cancelButtonText: "later",
        cancelButtonColor: "#D3D4D5",
        confirmButtonText: "Login now",
        confirmButtonColor: "#2495FF",
        text: "You have to login first",
      }).then((result) => (result.isConfirmed ? router.push("/login") : null));
    } else {
      router.push(`/my-booking`);
    }
  };

  const handleAuthProfile = () => {
    if (auth === null) {
      Swal.fire({
        icon: "info",
        showCancelButton: true,
        cancelButtonText: "later",
        cancelButtonColor: "#D3D4D5",
        confirmButtonText: "Login now",
        confirmButtonColor: "#2495FF",
        text: "You have to login first",
      }).then((result) => (result.isConfirmed ? router.push("/login") : null));
    } else {
      router.push(`/profile`);
    }
  };

  return (
    <div
      className={`row justify-content-center align-teims-center ${style.footer}`}
    >
      <div className="col-4 text-center">
        <TbCalendarTime
          size={27}
          color={router.pathname == "/my-booking" ? "#2495FF" : "#979797"}
          onClick={handleAuthBooking}
        />
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
          <a>
            <RiCompass3Fill size={55} color="white" />
          </a>
        </Link>
      </div>
      <div className="col-4 text-center">
        <CgProfile
          size={28}
          color={router.pathname == "/profile" ? "#2495FF" : "#979797"}
          onClick={handleAuthProfile}
        />
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
