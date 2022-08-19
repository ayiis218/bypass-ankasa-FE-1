import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa";
import Facebook from "../assets/facebook.svg";
import Google from "../assets/google.svg";
import Fingerprint from "../assets/fingerprint.svg";

import Blue from "../assets/illustration_blue.svg";

// custom components
import loginStyle from "../styles/Pages/login.module.css";

const Login = () => {
  const eye = <AiOutlineEye size={25} />;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <section className={loginStyle.main}>
        <Link href="/">
          <FaAngleLeft className={loginStyle.back} size={30} />
        </Link>
        <Image src={Blue} height={250} width={250} />
        <div>
          <h3 className={loginStyle.head}>Login</h3>
          <Form>
            <Form.Group className={loginStyle.formControl}>
              <Form.Control type="email" placeholder="Email" size="lg" />
            </Form.Group>
            <InputGroup className={loginStyle.formControl}>
              <Form.Control
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                size="lg"
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            </InputGroup>
          </Form>
          <div className={loginStyle.button}>
            <Button className={loginStyle.sign} size="lg">
              Sign In
            </Button>
          </div>
          <div>
            <p className={loginStyle.forgot}>Did you forgot your password?</p>
            <Link href="/forgot">
              <a className={loginStyle.forgot}>Tap here for reset</a>
            </Link>
          </div>
          <div className={loginStyle.border}></div>
          <div>
            <p className={loginStyle.sign}>or sign in with</p>
          </div>
          <Container>
            <Row>
              <Col>
                <Button className={loginStyle.signWith}>
                  <Image src={Google} height={25} width={25} />
                </Button>
              </Col>
              <Col>
                <Button className={loginStyle.signWith}>
                  <Image src={Facebook} height={25} width={25} />
                </Button>
              </Col>
              <Col>
                <Button className={loginStyle.signWith}>
                  <Image src={Fingerprint} height={25} width={25} />
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Login;
