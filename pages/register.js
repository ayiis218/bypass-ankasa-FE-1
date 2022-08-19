import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa";
import Blue from "../assets/illustration_blue.svg";

// custom components
import loginStyle from "../styles/Pages/register.module.css";

const Register = () => {
  const eye = <AiOutlineEye size={25} />;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <section id="styleButton" className={loginStyle.main}>
        <Container className={loginStyle.header}>
          <Link href="/">
            <FaAngleLeft className={loginStyle.back} size={30} />
          </Link>
          <Link href="/home">
            <a className={loginStyle.guest}>Continue as Guest</a>
          </Link>
        </Container>
        <Image src={Blue} height={250} width={250} />
        <div>
          <h3 className={loginStyle.head}>Register</h3>
          <Form id="formInput">
            <Form.Group className={loginStyle.formControl}>
              <Form.Control type="text" placeholder="Full Name" size="lg" />
            </Form.Group>
            <Form.Group className={loginStyle.formControl}>
              <Form.Control type="email" placeholder="Email" size="lg" />
            </Form.Group>
            <InputGroup id="buttonEye" className={loginStyle.formControl}>
              <Form.Control type={passwordShown ? "text" : "password"} placeholder="Password" size="lg" />
            <InputGroup className={loginStyle.formControl}>
              <Form.Control
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                size="lg"
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            </InputGroup>
            <Form.Group className={loginStyle.formControl}>
              <Form.Check type="checkbox" label="Accept terms and condition" />
            </Form.Group>
          </Form>
          <div className={loginStyle.button}>
            <Button className={`button ${loginStyle.signUp}`} size="lg">
              Sign Up
            </Button>
          </div>
          <div className={loginStyle.border}></div>
          <div>
            <p className={loginStyle.sign}>Already have an account?</p>
          </div>
          <div className={loginStyle.button}>
            <Button className={`button ${loginStyle.signIn}`} size="lg">
              Sign In
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
