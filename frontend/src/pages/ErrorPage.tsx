import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from '../components/Navigation/Navbar';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  align-items: center;
  color: var(--primary);
`;

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar>{}</Navbar>
      <Wrapper>
        <Title>This page doesn't exist anymore</Title>
        <Button
          style={{ backgroundColor: 'var(--primary)', border: 'none' }}
          onClick={() => {
            navigate('/');
          }}
        >
          Go Home
        </Button>
      </Wrapper>
    </>
  );
};

export default ErrorPage;
