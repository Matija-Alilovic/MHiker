import React, { useEffect } from 'react';
import styled from 'styled-components';

import { IInitStateUser } from '../redux/reducers/authReducer';
import { useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import {
  FaFacebookMessenger,
  FaTwitter,
  FaInstagram,
  FaPlusCircle,
} from 'react-icons/fa';

import Navbar from '../components/Navigation/Navbar';
import profile_background from '../assets/img/profile/profile-page-background.jpg';

import trail5 from '../assets/img/trials/trial-5.jpg';
import trail4 from '../assets/img/trials/trial-4.jpg';
import trail3 from '../assets/img/trials/trial-3.jpg';
import trail2 from '../assets/img/trials/trial-2.jpg';
import trial from '../assets/img/trials/trial-1.jpg';

import user from '../assets/img/user.png';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProfileBackgroundImage = styled.img`
  object-fit: cover;
  margin-top: 6rem;
  height: 22rem;
  width: 100%;
`;

const ProfileWrapper = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 3rem 9rem;

  box-shadow: rgba(100, 100, 111, 0.12) 0px 7px 29px 0px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const UserImg = styled(Image)`
  border: 3px solid var(--text);
  width: 13rem;
  margin-top: -7rem;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;

  h2 {
    font-size: 2.2rem;
    color: var(--primary);
    font-weight: 800;
  }

  span {
    margin-top: -0.6rem;
    display: block;
    font-size: 1.2rem;
    color: var(--text);
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Bottom = styled.div`
  padding: 2rem 9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 12rem;
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    font-size: 1.2rem;
  }
`;

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  h2 {
    color: var(--primary);
    font-weight: 600;
    margin-bottom: 1.4rem;
  }
`;

const Trails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const TrailCard = styled(Card)`
  width: 22rem;
  border: none;
  box-shadow: rgba(100, 100, 111, 0.12) 0px 7px 29px 0px;
`;

const TrailCardImage = styled(Card.Img)`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

const EmptyCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 22rem;
  gap: 1rem;
  background-color: var(--text-primary);
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.12) 0px 7px 29px 0px;

  h2 {
    color: var(--text);
  }

  *:first-child {
    font-size: 5rem;
    color: var(--text);
  }
  :hover {
    cursor: pointer;
  }
`;

const ProfilePage = () => {
  const navigate = useNavigate();
  const authData: IInitStateUser = useSelector((state: any) => state.auth);

  useEffect(() => {
    !authData.loggedIn && navigate('/login');
  }, []);

  return (
    <>
      <Navbar>{}</Navbar>
      <ProfileBackgroundImage src={profile_background} alt="" />
      <ProfileWrapper>
        <Top>
          <Left>
            <UserImg src={authData.photoUrl} roundedCircle fluid />
            <ProfileInfo>
              <h2>{authData.username}</h2>
              <span>Programmer</span>
            </ProfileInfo>
          </Left>
          <Right>
            <Button
              style={{ backgroundColor: 'var(--primary)', border: 'none' }}
            >
              Edit Profile
            </Button>

            <Dropdown>
              <Dropdown.Toggle
                style={{ backgroundColor: 'var(--primary)', border: 'none' }}
              >
                Options
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Right>
        </Top>
        <Bottom>
          <BottomLeft>
            <Button
              style={{
                backgroundColor: 'var(--primary)',
                border: 'none',
              }}
            >
              <FaFacebookMessenger />
            </Button>
            <Button
              style={{ backgroundColor: 'var(--primary)', border: 'none' }}
            >
              <FaTwitter />
            </Button>
            <Button
              style={{ backgroundColor: 'var(--primary)', border: 'none' }}
            >
              <FaInstagram />
            </Button>
          </BottomLeft>
          <BottomRight>
            <h2>My Trails</h2>
            <Trails>
              <TrailCard>
                <TrailCardImage variant="top" src={trail2} />
                <Card.Body>
                  <Card.Text>
                    <Image
                      fluid
                      rounded
                      src={user}
                      width="50px"
                      height="50px"
                    />
                    &nbsp; &nbsp;
                    <b>Matija Alilović</b>
                  </Card.Text>
                  <Card.Title>Mount Everest </Card.Title>
                  <Card.Text>
                    Mount Everest is Earth's highest mountain above sea level,
                    located in the Mahalangur.
                  </Card.Text>

                  <Button
                    style={{
                      backgroundColor: 'var(--primary)',
                      border: 'none',
                    }}
                  >
                    Discover
                  </Button>
                </Card.Body>
              </TrailCard>
              <EmptyCard>
                <FaPlusCircle />
                <h2>Add Trail</h2>
              </EmptyCard>
            </Trails>
          </BottomRight>
        </Bottom>
      </ProfileWrapper>
    </>
  );
};

export default ProfilePage;
