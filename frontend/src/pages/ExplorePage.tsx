import React, { useEffect } from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navigation/Navbar';
import SearchBox from '../components/Navigation/SearchBox';
import Category from '../components/reusable/Category';

import trail5 from '../assets/img/trials/trial-5.jpg';
import trail4 from '../assets/img/trials/trial-4.jpg';
import trail3 from '../assets/img/trials/trial-3.jpg';
import trail2 from '../assets/img/trials/trial-2.jpg';
import trial from '../assets/img/trials/trial-1.jpg';
import user from '../assets/img/user.png';

import { Button, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { getTrails } from '../firebase/handlers/trailHandlers';
import { useDispatch, useSelector } from 'react-redux';
import { IInitStateTrail, ITrail } from '../redux/reducers/trailReducer';
import { toggleSpinner } from '../redux/reducers/spinnerReducer';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div``;

const Header = styled.div`
  padding-top: 10rem;
  margin-bottom: -5rem;
  color: var(--primary);
  text-align: center;

  h2 {
    font-size: 2.8rem;
  }

  span {
    display: block;
    font-size: 1rem;
    color: var(--text);
  }
`;

const Title = styled.h2`
  margin-top: 10rem;
  margin-bottom: 4rem;
  color: var(--primary);
  font-size: 2.2rem;
  font-weight: 600;
  text-align: left;
  padding: 1.2rem 3rem;
  background-color: #f3f3f3;
  box-shadow: rgba(100, 100, 111, 0.12) 0px 7px 29px 0px;

  span {
    padding: 0;
    margin: 0;
    display: block;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-silver);
  }
`;

const Categories = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Trails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 4rem;
`;

const TrailCard = styled(Card)`
  width: 22rem;
  border: none;
  box-shadow: rgba(100, 100, 111, 0.12) 0px 7px 29px 0px;
`;

const TrailCardImage = styled(Card.Img)`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ExplorePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const trailData: IInitStateTrail = useSelector((state: any) => state.trails);
  const spinnerData = useSelector((state: any) => state.spinner);

  useEffect(() => {
    getTrails(dispatch);
  }, []);

  return (
    <>
      {spinnerData.active == false && (
        <>
          <Navbar>
            <SearchBox />
          </Navbar>
          <Header>
            <span>Reviews will help you choose</span>
            <h2>Discover Trails</h2>
          </Header>
          <Title>
            Categories <br />
            <span>Select Correct Category</span>
            <Categories>
              <Category key={1} name={'All'} img={trail2} categoryValue={1} />
              <Category
                key={1}
                name={'America'}
                img={trail2}
                categoryValue={1}
              />
              <Category key={1} name={'India'} img={trail2} categoryValue={1} />
              <Category
                key={1}
                name={'Serbia'}
                img={trail2}
                categoryValue={1}
              />
              <Category
                key={1}
                name={'Indijska'}
                img={trail2}
                categoryValue={1}
              />
            </Categories>
          </Title>
          <Trails>
            {trailData.items.map((item: ITrail) => (
              <TrailCard key={item.id}>
                <TrailCardImage variant="top" src={item.images[0]} />
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
                    <b>{item.username}</b>
                  </Card.Text>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button
                    style={{
                      backgroundColor: 'var(--primary)',
                      border: 'none',
                    }}
                    onClick={() => {
                      navigate(`/trail/${item.id}`);
                    }}
                  >
                    Discover
                  </Button>
                </Card.Body>
              </TrailCard>
            ))}
          </Trails>
          <Footer />
        </>
      )}
    </>
  );
};

export default ExplorePage;
