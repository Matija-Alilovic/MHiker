import React, { useEffect } from "react";
import styled from "styled-components";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navigation/Navbar";
import SearchBox from "../components/Navigation/SearchBox";
import Category from "../components/reusable/Category";

import trail5 from "../assets/img/trials/trial-5.jpg";
import trail4 from "../assets/img/trials/trial-4.jpg";
import trail3 from "../assets/img/trials/trial-3.jpg";
import trail2 from "../assets/img/trials/trial-2.jpg";
import trial from "../assets/img/trials/trial-1.jpg";
import user from "../assets/img/user.png";

import { Button, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { getTrails } from "../firebase/handlers/trailHandlers";
import { useDispatch } from "react-redux";

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
  height: 280px;
  object-fit: cover;
`;

const ExplorePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTrails(dispatch);
  }, []);

  return (
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
          <Category key={1} name={"All"} img={trail2} categoryValue={1} />
          <Category key={1} name={"America"} img={trail2} categoryValue={1} />
          <Category key={1} name={"India"} img={trail2} categoryValue={1} />
          <Category key={1} name={"Serbia"} img={trail2} categoryValue={1} />
          <Category key={1} name={"Indijska"} img={trail2} categoryValue={1} />
        </Categories>
      </Title>
      <Trails>
        <TrailCard>
          <TrailCardImage variant="top" src={trail2} />
          <Card.Body>
            <Card.Text>
              <Image fluid rounded src={user} width="50px" height="50px" />
              &nbsp; &nbsp;
              <b>Matija Alilović</b>
            </Card.Text>
            <Card.Title>Mount Everest </Card.Title>
            <Card.Text>
              Mount Everest is Earth's highest mountain above sea level, located
              in the Mahalangur.
            </Card.Text>

            <Button
              style={{ backgroundColor: "var(--primary)", border: "none" }}
            >
              Discover
            </Button>
          </Card.Body>
        </TrailCard>
        <TrailCard>
          <TrailCardImage variant="top" src={trial} />
          <Card.Body>
            <Card.Text>
              <Image fluid rounded src={user} width="50px" height="50px" />
              &nbsp; &nbsp;
              <b>Matija Alilović</b>
            </Card.Text>
            <Card.Title>Mount Everest </Card.Title>
            <Card.Text>
              Mount Everest is Earth's highest mountain above sea level, located
              in the Mahalangur.
            </Card.Text>

            <Button
              style={{ backgroundColor: "var(--primary)", border: "none" }}
            >
              Discover
            </Button>
          </Card.Body>
        </TrailCard>
        <TrailCard>
          <TrailCardImage variant="top" src={trail3} />
          <Card.Body>
            <Card.Text>
              <Image fluid rounded src={user} width="50px" height="50px" />
              &nbsp; &nbsp;
              <b>Matija Alilović</b>
            </Card.Text>
            <Card.Title>Mount Everest </Card.Title>
            <Card.Text>
              Mount Everest is Earth's highest mountain above sea level, located
              in the Mahalangur.
            </Card.Text>

            <Button
              style={{ backgroundColor: "var(--primary)", border: "none" }}
            >
              Discover
            </Button>
          </Card.Body>
        </TrailCard>
        <TrailCard>
          <TrailCardImage variant="top" src={trail4} />
          <Card.Body>
            <Card.Text>
              <Image fluid rounded src={user} width="50px" height="50px" />
              &nbsp; &nbsp;
              <b>Matija Alilović</b>
            </Card.Text>
            <Card.Title>Mount Everest </Card.Title>
            <Card.Text>
              Mount Everest is Earth's highest mountain above sea level, located
              in the Mahalangur.
            </Card.Text>

            <Button
              style={{ backgroundColor: "var(--primary)", border: "none" }}
            >
              Discover
            </Button>
          </Card.Body>
        </TrailCard>
        <TrailCard>
          <TrailCardImage variant="top" src={trail5} />
          <Card.Body>
            <Card.Text>
              <Image fluid rounded src={user} width="50px" height="50px" />
              &nbsp; &nbsp;
              <b>Matija Alilović</b>
            </Card.Text>
            <Card.Title>Mount Everest </Card.Title>
            <Card.Text>
              Mount Everest is Earth's highest mountain above sea level, located
              in the Mahalangur.
            </Card.Text>

            <Button
              style={{ backgroundColor: "var(--primary)", border: "none" }}
            >
              Discover
            </Button>
          </Card.Body>
        </TrailCard>
        <TrailCard>
          <TrailCardImage variant="top" src={trail2} />
          <Card.Body>
            <Card.Text>
              <Image fluid rounded src={user} width="50px" height="50px" />
              &nbsp; &nbsp;
              <b>Matija Alilović</b>
            </Card.Text>
            <Card.Title>Mount Everest </Card.Title>
            <Card.Text>
              Mount Everest is Earth's highest mountain above sea level, located
              in the Mahalangur.
            </Card.Text>

            <Button
              style={{ backgroundColor: "var(--primary)", border: "none" }}
            >
              Discover
            </Button>
          </Card.Body>
        </TrailCard>
        <TrailCard>
          <TrailCardImage variant="top" src={trial} />
          <Card.Body>
            <Card.Text>
              <Image fluid rounded src={user} width="50px" height="50px" />
              &nbsp; &nbsp;
              <b>Matija Alilović</b>
            </Card.Text>
            <Card.Title>Mount Everest </Card.Title>
            <Card.Text>
              Mount Everest is Earth's highest mountain above sea level, located
              in the Mahalangur.
            </Card.Text>

            <Button
              style={{ backgroundColor: "var(--primary)", border: "none" }}
            >
              Discover
            </Button>
          </Card.Body>
        </TrailCard>
        <TrailCard>
          <TrailCardImage variant="top" src={trail3} />
          <Card.Body>
            <Card.Text>
              <Image fluid rounded src={user} width="50px" height="50px" />
              &nbsp; &nbsp;
              <b>Matija Alilović</b>
            </Card.Text>
            <Card.Title>Mount Everest </Card.Title>
            <Card.Text>
              Mount Everest is Earth's highest mountain above sea level, located
              in the Mahalangur.
            </Card.Text>

            <Button
              style={{ backgroundColor: "var(--primary)", border: "none" }}
            >
              Discover
            </Button>
          </Card.Body>
        </TrailCard>
        <TrailCard>
          <TrailCardImage variant="top" src={trail4} />
          <Card.Body>
            <Card.Text>
              <Image fluid rounded src={user} width="50px" height="50px" />
              &nbsp; &nbsp;
              <b>Matija Alilović</b>
            </Card.Text>
            <Card.Title>Mount Everest </Card.Title>
            <Card.Text>
              Mount Everest is Earth's highest mountain above sea level, located
              in the Mahalangur.
            </Card.Text>

            <Button
              style={{ backgroundColor: "var(--primary)", border: "none" }}
            >
              Discover
            </Button>
          </Card.Body>
        </TrailCard>
        <TrailCard>
          <TrailCardImage variant="top" src={trail5} />
          <Card.Body>
            <Card.Text>
              <Image fluid rounded src={user} width="50px" height="50px" />
              &nbsp; &nbsp;
              <b>Matija Alilović</b>
            </Card.Text>
            <Card.Title>Mount Everest </Card.Title>
            <Card.Text>
              Mount Everest is Earth's highest mountain above sea level, located
              in the Mahalangur.
            </Card.Text>

            <Button
              style={{ backgroundColor: "var(--primary)", border: "none" }}
            >
              Discover
            </Button>
          </Card.Body>
        </TrailCard>
      </Trails>
      <Footer />
    </>
  );
};

export default ExplorePage;
