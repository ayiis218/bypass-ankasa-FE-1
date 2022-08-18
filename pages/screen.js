import Head from "next/head";
import Image from "next/image";
import React from "react";
import White from "../assets/illustration_white.svg";

// custom components
import loginStyle from "../styles/Pages/screen.module.css";

const Welcome = () => {
  return (
    <>
      <Head></Head>
      <section className={loginStyle.main}>
        <Image src={White} height={250} width={250} />
        <div className={loginStyle.main}>
          <h3 className={loginStyle.head}>Ankasa Ticketing</h3>
        </div>
      </section>
    </>
  );
};

export default Welcome;
