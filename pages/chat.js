import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";

// custom components
import loginStyle from "../styles/Pages/chat.module.css";

const Register = () => {
  return (
    <>
      <section className={loginStyle.main}>
        <Container className={loginStyle.header}>
          <Link href="/">
            <FaAngleLeft className={loginStyle.back} size={30} />
          </Link>
          <Link href="/home">
            <a className={loginStyle.filter}>Filter</a>
          </Link>
        </Container>
        <div>
          <h3 className={loginStyle.head}>Chat</h3>

          <div className={loginStyle.border}></div>
        </div>
      </section>
    </>
  );
};

export default Register;
