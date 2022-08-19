import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCheckAll } from "react-icons/bs";

import Photo from "../assets/examplePhoto.svg";

// custom components
import loginStyle from "../styles/Pages/chat.module.css";

const Register = () => {
  return (
    <>
      <Container className={`col-md-4 ${loginStyle.body}`}>
        <div className={loginStyle.header}>
          <Link href="/">
            <FaAngleLeft className={loginStyle.back} size={30} />
          </Link>
          <Link href="/home">
            <a className={loginStyle.filter}>Filter</a>
          </Link>
        </div>
        <div>
          <h3 className={loginStyle.head}>Chat</h3>
          <div id="inputSearchHome" className="row mt-3">
            <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">
                <FiSearch size={30} color="#A3A3A3" />
              </span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Type your message ....." />
            </div>
          </div>
          {[...new Array(10)].map((item, key) => (
            <Container className={loginStyle.chatBody}>
              <Col className={loginStyle.photo}>
                <Image src={Photo} height={60} width={60} />
              </Col>
              <Col>
                <Container className={loginStyle.text}>
                  <Col>
                    <Row className={loginStyle.name}>Soham Henry</Row>
                    <Row>Me: Bro, just fuck off</Row>
                  </Col>
                  <Col className={loginStyle.timeAndStatus}>
                    <Row className={loginStyle.time}>
                      <time>8:30</time>
                    </Row>
                    <Row className={loginStyle.status}>
                      <BsCheckAll size={25} />
                    </Row>
                  </Col>
                </Container>
              </Col>
            </Container>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Register;
