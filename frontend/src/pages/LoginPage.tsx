import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const LoginPage = () => {
  const onLoginHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <LoginPageWrapper>
      <Title>Sign In</Title>
      <Form onSubmit={onLoginHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button
          type="submit"
          style={{ backgroundColor: 'var(--primary)', border: 'none' }}
        >
          Login
        </Button>
        <br />

        <Link to="/register">
          <NoAccountText>You don't have account yet?</NoAccountText>
        </Link>
      </Form>
    </LoginPageWrapper>
  );
};

export default LoginPage;
