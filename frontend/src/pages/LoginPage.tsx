import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navigation/Navbar';
import { handleLogin } from '../firebase/handlers/authHandlers';
import { IInitStateUser } from '../redux/reducers/authReducer';
import { toggleSpinner } from '../redux/reducers/spinnerReducer';

const LoginPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  form {
    font-size: 1.1rem;
    width: 300px;
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
  color: red;
`;

const LoginPage = () => {
  const authData: IInitStateUser = useSelector((state: any) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const onLoginHandler = (e: any) => {
    e.preventDefault();

    dispatch(toggleSpinner());

    if (emailRef.current?.value != null && passwordRef.current?.value != null) {
      handleLogin(
        emailRef.current?.value,
        passwordRef.current?.value,
        dispatch,
        navigate
      );
    }

    dispatch(toggleSpinner());
  };

  return (
    <LoginPageWrapper>
      <Navbar>{}</Navbar>
      <Title>Sign In</Title>
      <Form onSubmit={onLoginHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button
          type="submit"
          style={{ backgroundColor: 'var(--primary)', border: 'none' }}
        >
          Login
        </Button>
        <br />
        <ErrorMessageText>{authData.errorMessage}</ErrorMessageText>
        <Link to="/register">
          <NoAccountText>You don't have account yet?</NoAccountText>
        </Link>
      </Form>
    </LoginPageWrapper>
  );
};

export default LoginPage;
