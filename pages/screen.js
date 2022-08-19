import Head from "next/head";
import Image from "next/image";
import React from "react";
import White from "../assets/illustration_white.svg";
import { Container } from "react-bootstrap";

// custom components
import loginStyle from "../styles/Pages/screen.module.css";

const Welcome = () => {
  return (
    <>
      <Head></Head>
      <Container className={`col-md-4 ${loginStyle.body}`}>
        <div className={loginStyle.main}>
          <Image src={White} height={250} width={250} />
          <h3 className={loginStyle.head}>Ankasa Ticketing</h3>
        </div>
      </Container>
    </>
  );
};

export default Welcome;
