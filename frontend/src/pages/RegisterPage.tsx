import React, { RefObject, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { handleRegister } from '../firebase/handlers/authHandlers';
import Navbar from '../components/Navigation/Navbar';
import { IInitStateUser } from '../redux/reducers/authReducer';
import { Modal } from 'react-bootstrap';
import { auth } from '../firebase/firebase';

const RegisterPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  form {
    font-size: 1.1rem;

    width: 25rem;
  }
`;

const Title = styled.h1`
  color: var(--primary);
  margin: 2rem;
`;

const NoAccountText = styled.span`
  color: var(--primary-text);
  display: block;
  font-size: 1rem;
  margin-top: 1.2rem;

  :hover {
    cursor: pointer;
  }
`;

const ErrorMessageText = styled.span`
  display: block;
  color: red;
  margin-bottom: 10px;
`;

const RegisterPage = () => {
  const authData: IInitStateUser = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

  const [isPasswordValid, setIsPasswordValid]: any = useState(false);

  const onRegisterHandler = (event: any) => {
    event.preventDefault();

    if (emailRef.current?.value != null && passwordRef.current?.value != null) {
      handleRegister(
        emailRef.current?.value,
        passwordRef.current?.value,
        dispatch,
        navigate
      );
    }
  };

  return (
    <RegisterPageWrapper>
      <Navbar>{}</Navbar>
      <Title>Register</Title>
      <Form validated={true} onSubmit={onRegisterHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            ref={usernameRef}
            type="text"
            placeholder="Enter username"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
          <Form.Control.Feedback type="invalid">
            Must contain at least one number and one uppercase and lowercase
            letter, and at least 8 or more characters
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
            pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
            isValid={isPasswordValid}
          />
          <Form.Control.Feedback type="invalid">
            Passwords should be same
          </Form.Control.Feedback>
        </Form.Group>
        <ErrorMessageText>{authData.errorMessage}</ErrorMessageText>
        <Button
          type="submit"
          style={{ backgroundColor: 'var(--primary)', border: 'none' }}
        >
          Sign Up
        </Button>
        <br />
        <Link to="/login">
          <NoAccountText>Already have account?</NoAccountText>
        </Link>
      </Form>
    </RegisterPageWrapper>
  );
};

export default RegisterPage;
