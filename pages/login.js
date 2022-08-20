import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa";
import Facebook from "../assets/facebook.svg";
import Google from "../assets/google.svg";
import Fingerprint from "../assets/fingerprint.svg";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

import Blue from "../assets/illustration_blue.svg";

// custom components
import loginStyle from "../styles/login.module.css";

const Login = () => {
  const passwordLength = {
    min: 6,
    max: 20
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required('Email should not be empty')  ,
    password: Yup.string()
      .min(passwordLength.min, `Password length must be ${passwordLength.min} or more characters`)
      .max(passwordLength.max, `Password shold not be more than ${passwordLength.max} characters`)
      .required('Password shold not be empty'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const router = useRouter();
  const eye = <AiOutlineEye size={25} />;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const backNavigate = () => {
    router.back();
  };

  return (
    <>
      <section id="styleButton" className={loginStyle.main}>
        <FaAngleLeft
          className={loginStyle.back}
          onClick={backNavigate}
          size={30}
        />
        <Image src={Blue} alt="" height={250} width={250} />
        <div>
          <h3 className={loginStyle.head}>Login</h3>
          <Form id="formInput" onSubmit={formik.handleSubmit}>
            <Form.Group className={loginStyle.formControl}>
              <Form.Control type="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email" size="lg" />
            </Form.Group>
            <InputGroup id="buttonEye" className={loginStyle.formControl} />
            <InputGroup className={loginStyle.formControl}>
              <Form.Control
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                size="lg"
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            </InputGroup>
            <div className={loginStyle.button}>
              <Button className={`button {loginStyle.sign}`} type="submit" size="lg">
                Sign In
              </Button>
            </div>
          </Form>
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
                  <Image src={Google} alt="" height={25} width={25} />
                </Button>
              </Col>
              <Col>
                <Button className={loginStyle.signWith}>
                  <Image src={Facebook} alt="" height={25} width={25} />
                </Button>
              </Col>
              <Col>
                <Button className={loginStyle.signWith}>
                  <Image src={Fingerprint} alt="" height={25} width={25} />
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
