import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const RegisterPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  form {
    font-size: 1.1rem;
    width: 400px;
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

const RegisterPage = () => {
  const onRegisterHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <RegisterPageWrapper>
      <Title>Register</Title>
      <Form onSubmit={onRegisterHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
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
