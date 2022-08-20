import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import { FaAngleLeft } from 'react-icons/fa';
import Blue from '../assets/illustration_blue.svg';
import { useRouter } from 'next/router';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearError, setRegistered } from '../redux/features/authSlice';

// custom components
import loginStyle from '../styles/register.module.css';

const Register = () => {
   const router = useRouter();
   const dispatch = useDispatch();
   const authState = useSelector(state => state.auth)
   const { isLoading, error, isRegistered } = authState

   useEffect(() => {
      dispatch(setRegistered(false))
   })

   const handleCloseError = () => {
      dispatch(clearError())
   }

   const handleCloseRegister = () => {
      dispatch(setRegistered(false))
   }

   const passwordLength = {
      min: 6,
      max: 20
    }

   const fullNameLength = {
      min: 4,
      max: 50
   }

   const RegisterSchema = Yup.object().shape({
      fullName: Yup.string()
         .min(fullNameLength.min, `Fullname must contain at least ${fullNameLength.min} characters`)
         .max(fullNameLength.max, `Fullname must contain ${fullNameLength.max} characters at most`)
         .required("Fullname should not be empty"),
      email: Yup.string().email("Please input a valid email").required('Email should not be empty')  ,
      password: Yup.string()
        .min(passwordLength.min, `Password length must be ${passwordLength.min} or more characters`)
        .max(passwordLength.max, `Password shold not be more than ${passwordLength.max} characters`)
        .required('Password shold not be empty'),
   })

   const formik = useFormik({
      initialValues: {
         fullName: '',
         email: '',
         password: ''
      },
      validationSchema: RegisterSchema,
      onSubmit: (values) => {
         dispatch(clearError())
         dispatch(register(values))
      }
   })

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
            <Container className={loginStyle.header}>
               <FaAngleLeft
                  className={loginStyle.back}
                  onClick={backNavigate}
                  size={30}
               />

               <Link href="/home">
                  <a className={loginStyle.guest}>Continue as Guest</a>
               </Link>
            </Container>
            <Image src={Blue} alt="logo" height={250} width={250} />
            <div>
               <h3 className={loginStyle.head}>Register</h3>
               {
                  error && (
                     <Alert variant="danger" onClose={handleCloseError} dismissible>
                        {error}
                     </Alert>
                  )
               }
               {
                  isRegistered && (
                     <Alert variant="success" onClose={handleCloseRegister} dismissible>
                        Successfully Registered!
                     </Alert>
                  )
               }
               <Form id="formInput" method="POST" onSubmit={formik.handleSubmit}>
                  <Form.Group className={loginStyle.formControl}>
                     <Form.Control
                        type="text"
                        placeholder="Full Name"
                        size="lg"
                        name="fullName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                     />
                  </Form.Group>
                  {
                     formik.errors.fullName && formik.touched.fullName && <small className="text-danger">{formik.errors.fullName}</small>
                  }
                  <Form.Group className={loginStyle.formControl}>
                     <Form.Control
                        type="email" 
                        placeholder="Email" 
                        size="lg"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                     />
                  </Form.Group>
                  {
                     formik.errors.email && formik.touched.email && <small className="text-danger"> {formik.errors.email} </small>
                  }
                  <InputGroup
                     id="buttonEye"
                     className={loginStyle.formControl}
                  />
                  <InputGroup className={loginStyle.formControl}>
                     <Form.Control
                        type={passwordShown ? 'text' : 'password'}
                        placeholder="Password"
                        size="lg"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                     />
                     <i onClick={togglePasswordVisiblity}>{eye}</i>
                  </InputGroup>
                  {
                     formik.errors.password && formik.touched.password && <small className="text-danger">{formik.errors.password}</small>
                  }
                  <Form.Group className={loginStyle.formControl}>
                     <Form.Check
                        type="checkbox"
                        label="Accept terms and condition"
                     />
                  </Form.Group>
                  <div className={loginStyle.button}>
                     <Button className={`button ${loginStyle.signUp}`} size="lg" type="submit" disabled={isLoading}>
                        {isLoading ? 'Signing Up' : 'Sign Up'}
                     </Button>
                  </div>
               </Form>
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
