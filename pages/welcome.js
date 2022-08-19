import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { Carousel, Button } from "react-bootstrap";
import Blue from "../assets/illustration_blue.svg";

// custom components
import loginStyle from "../styles/Pages/welcome.module.css";

const Welcome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Head></Head>
      <section id="styleButton" className={loginStyle.main}>
        <Image src={Blue} height={250} width={250} />
        <Slider className={loginStyle.main} {...settings}>
          <div className={loginStyle.main}>
            <h3 className={loginStyle.head}>Get Started</h3>
            <p className={loginStyle.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
          <div className={loginStyle.main}>
            <h3 className={loginStyle.head}>Get Started</h3>
            <p className={loginStyle.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
          <div className={loginStyle.main}>
            <h3 className={loginStyle.head}>Get Started</h3>
            <p className={loginStyle.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
          <div className={loginStyle.main}>
            <h3 className={loginStyle.head}>Get Started</h3>
            <p className={loginStyle.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
        </Slider>
        <div>
          <div className={loginStyle.button}>
            <Button className={`button ${loginStyle.signUp}`} size="lg">
              <Link href="/register">
                <a className={loginStyle.signUp}>Create My Account</a>
              </Link>
            </Button>
          </div>
          <div className={loginStyle.button}>
            <Button className={`button ${loginStyle.signIn}`} size="lg">
              <Link className={loginStyle.signIn} href="/login">
                <a className={loginStyle.signIn}>Sign In</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
