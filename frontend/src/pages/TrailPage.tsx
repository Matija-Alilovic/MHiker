import React, { useEffect } from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navigation/Navbar';

import trial from '../assets/img/trials/trial-1.jpg';
import { Badge } from 'react-bootstrap';
import { FaFlag, FaStar } from 'react-icons/fa';
import { getTrailById } from '../firebase/handlers/trailHandlers';

import { useParams } from 'react-router-dom';
import { IInitStateTrail } from '../redux/reducers/trailReducer';
import { useDispatch, useSelector } from 'react-redux';

const BackgroundImage = styled.img`
  position: relative;

  width: 100%;
  height: 38rem;
  object-fit: cover;
  z-index: -1;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: white;
  border-radius: 60px 60px 0px 0px;
  margin-top: -5rem;
  z-index: 4;
  width: 100%;

  padding: 4rem 5rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  h1 {
    font-size: 2.6rem;
    color: var(--primary);
  }
`;

const PriceContainer = styled.div`
  background-color: var(--primary);
  border-radius: 10px;
  padding: 1rem 2rem;

  span {
    color: var(--text-primary);
    font-size: 1.6rem;
  }
`;

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  h3 {
    color: var(--primary-text);
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Icon = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const BookNowButton = styled.button`
  padding: 2rem 4rem;
  border-radius: 20px;
  color: white;
  background-color: var(--primary);
  border: 0;
  font-size: 1.2rem;
  transition: all 0.15s;

  :hover {
    filter: brightness(105%);
    box-shadow: rgba(100, 100, 111, 0.25) 0px 7px 29px 0px;
  }
`;

const TrailPage = () => {
  const dispatch = useDispatch();

  const { id }: any = useParams();
  const trailData: IInitStateTrail = useSelector((state: any) => state.trails);

  useEffect(() => {
    getTrailById(id, dispatch);
  }, []);

  return (
    <>
      <Navbar>{}</Navbar>
      <BackgroundImage src={trailData.currentTrail.image} alt="" />
      <Body>
        <Header>
          <h1>{trailData.currentTrail.name}</h1>
          <PriceContainer>
            <span>
              <b>$100</b> / person
            </span>
          </PriceContainer>
        </Header>
        <OverviewContainer>
          <h3>Overview</h3>
          <IconContainer>
            <Icon>
              <Badge
                bg="var(--primary)"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  padding: '0.9rem',
                  fontSize: '1.1rem',
                }}
              >
                <FaFlag />
              </Badge>
              <div>
                <span>
                  <b>Duration</b>
                </span>
                <br />
                <span>5 Days</span>
              </div>
            </Icon>
            <Icon>
              <Badge
                bg="var(--primary)"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  padding: '0.9rem',
                  fontSize: '1.1rem',
                }}
              >
                <FaStar />
              </Badge>
              <div>
                <span>
                  <b>Rating</b>
                </span>
                <br />
                <span>4.8 out of 5</span>
              </div>
            </Icon>
          </IconContainer>
          <p>
            Have you ever been on holiday to the Greek islands before? There’s a
            good chance you may have come across Santorini before.{' '}
          </p>
        </OverviewContainer>
        <BookNowButton>Book Now</BookNowButton>
      </Body>
    </>
  );
};

export default TrailPage;
