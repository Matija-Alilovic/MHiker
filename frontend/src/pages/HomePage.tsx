import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import styled from 'styled-components';

import familyHiking from '../assets/img/illustrations/mainPage.svg';
import newsletterImg from '../assets/img/illustrations/newsletter.svg';
import trial from '../assets/img/trials/trial-1.jpg';
import user from '../assets/img/user.png';

import { MdArrowRightAlt, MdStarBorder } from 'react-icons/md';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 16rem 5rem;

  /* Desktops and laptops ----------- */
  @media only screen and (max-width: 1224px) {
    flex-direction: column;
    gap: 5rem;
    img {
      width: 100%;
    }
  }
`;

const Left = styled.div`
  flex: 1;
  h2 {
    font-size: 3.8rem;
    color: #202e5c;
  }

  h5 {
    font-size: 1.4rem;
    color: var(--text);
    font-weight: 400;
  }

  span {
    display: block;
    font-size: 1.4rem;
    margin-top: 2rem;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const ExploreNow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  margin-top: 1rem;
  font-size: 1.5rem;
  color: var(--primary);

  p {
    margin: 0;
  }

  .right-arrow {
    font-size: 2rem;
  }

  :hover {
    cursor: pointer;
    .right-arrow {
      transform: scale(1.3);
      transform: translateX(5px);
    }
  }
`;

const DiscoverTrails = styled.div`
  padding: 15rem 12rem;
  position: relative;
  background-color: var(--primary);

  .custom-shape-divider-top-1658516882 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-top-1658516882 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 146px;
  }

  .custom-shape-divider-top-1658516882 .shape-fill {
    fill: #ffffff;
  }

  .custom-shape-divider-bottom-1658567718 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1658567718 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 39px;
  }

  .custom-shape-divider-bottom-1658567718 .shape-fill {
    fill: #ffffff;
  }

  @media only screen and (max-width: 900px) {
    padding: 15rem 4rem;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  color: white;

  h2 {
    font-size: 2.8rem;
  }

  span {
    display: block;
    font-size: 1rem;
    color: #dfdfdf;
  }
`;

const TrailList = styled.div`
  display: flex;
  justify-content: left;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Testimonials = styled.div`
  padding: 4rem 12rem;

  @media only screen and (max-width: 900px) {
    padding: 4rem 0rem;
  }
`;

const TestimonialHeader = styled.header`
  margin-bottom: 4rem;
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

const TestimonialList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const NewsletterWrapper = styled.div`
  padding: 4rem 10rem;

  @media only screen and (max-width: 700px) {
    padding: 4rem 0rem;
  }
`;

const Newsletter = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: var(--primary);
  border-radius: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 3rem 8rem;

  img {
    height: 350px;
  }

  /* Smartphones (portrait) ----------- */
`;

const NewsletterForm = styled.form`
  h1 {
    color: white;
  }

  span {
    color: var(--text-primary);
    font-size: 1.2rem;
  }
`;

const InputContainer = styled.div`
  position: relative;

  input {
    width: 100%;
    margin: 2rem 0rem;
    padding: 1.2rem 1.2rem;
    border-radius: 50px;
    border: 1px white;
  }

  input:focus {
    outline: none;
  }

  button {
    border-radius: 50px;
    padding: 1rem 3rem;
    border: none;
    color: white;
    background-color: var(--primary);
    font-weight: 500;

    position: absolute;
    bottom: 2.15rem;
    right: 3px;
  }

  button:hover {
  }
`;

const HomePage = () => {
  return (
    <>
      <Navbar>{}</Navbar>
      <Main>
        <Left data-aos="fade-left" data-aos-duration="500">
          <h2>Explore Hiking Locations Or Post Your Own!</h2>
          <h5>First Hiking Social Media</h5>
          <Link to="/explore" style={{ textDecoration: 'none' }}>
            <ExploreNow className="hover-underline-animation">
              <p>Explore now</p>
              <MdArrowRightAlt className="right-arrow" />
            </ExploreNow>
          </Link>
        </Left>
        <Right data-aos="fade-right" data-aos-duration="500">
          <img src={familyHiking} alt="Error when loading photo" />
        </Right>
      </Main>
      <DiscoverTrails data-aos="fade-up">
        <Header>
          <span>Reviews will help you choose</span>
          <h2>Discover trails</h2>
        </Header>
        <TrailList>
          <Card style={{ width: '21rem', border: 'none' }}>
            <Card.Img variant="top" src={trial} />
            <Card.Body>
              <Card.Text>
                <Image fluid rounded src={user} width="50px" height="50px" />
                &nbsp; &nbsp;
                <b>Matija Alilović</b>
              </Card.Text>
              <Card.Title>Mount Everest </Card.Title>
              <Card.Text>
                Mount Everest is Earth's highest mountain above sea level,
                located in the Mahalangur.
              </Card.Text>

              <Button
                style={{ backgroundColor: 'var(--primary)', border: 'none' }}
              >
                Discover
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '21rem', border: 'none' }}>
            <Card.Img variant="top" src={trial} />
            <Card.Body>
              <Card.Text>
                <Image fluid rounded src={user} width="50px" height="50px" />
                &nbsp; &nbsp;
                <b>Matija Alilović</b>
              </Card.Text>
              <Card.Title>Mount Everest </Card.Title>
              <Card.Text>
                Mount Everest is Earth's highest mountain above sea level,
                located in the Mahalangur.
              </Card.Text>

              <Button
                style={{ backgroundColor: 'var(--primary)', border: 'none' }}
              >
                Discover
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '21rem', border: 'none' }}>
            <Card.Img variant="top" src={trial} />
            <Card.Body>
              <Card.Text>
                <Image fluid rounded src={user} width="50px" height="50px" />
                &nbsp; &nbsp;
                <b>Matija Alilović</b>
              </Card.Text>
              <Card.Title>Mount Everest </Card.Title>
              <Card.Text>
                Mount Everest is Earth's highest mountain above sea level,
                located in the Mahalangur.
              </Card.Text>

              <Button
                style={{ backgroundColor: 'var(--primary)', border: 'none' }}
              >
                Discover
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '21rem', border: 'none' }}>
            <Card.Img variant="top" src={trial} />
            <Card.Body>
              <Card.Text>
                <Image fluid rounded src={user} width="50px" height="50px" />
                &nbsp; &nbsp;
                <b>Matija Alilović</b>
              </Card.Text>
              <Card.Title>Mount Everest </Card.Title>
              <Card.Text>
                Mount Everest is Earth's highest mountain above sea level,
                located in the Mahalangur.
              </Card.Text>

              <Button
                style={{ backgroundColor: 'var(--primary)', border: 'none' }}
              >
                Discover
              </Button>
            </Card.Body>
          </Card>
        </TrailList>
        <div className="custom-shape-divider-top-1658516882">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-bottom-1658567718">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </DiscoverTrails>
      <Testimonials data-aos="zoom-in" data-aos-duration="700">
        <TestimonialHeader>
          <span>Testimonials</span>
          <h2>Share your favourite hiking locations!</h2>
        </TestimonialHeader>
        <TestimonialList>
          <Card
            style={{
              width: '25rem',
              border: 'none',
              padding: '10px',
              borderRadius: '15px',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }}
          >
            <Card.Body>
              <Card.Title>
                <Image
                  fluid
                  roundedCircle
                  src={user}
                  width="50px"
                  height="50px"
                />
                <br />
                Matija Alilovic
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
              </Card.Subtitle>
              <Card.Text>
                What an amazing place, I was hiking there 2 weeks ago and it was
                awesome!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: '25rem',
              border: 'none',
              padding: '10px',
              borderRadius: '15px',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }}
          >
            <Card.Body>
              <Card.Title>
                <Image
                  fluid
                  roundedCircle
                  src={user}
                  width="50px"
                  height="50px"
                />
                <br />
                Matija Alilovic
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
              </Card.Subtitle>
              <Card.Text>
                What an amazing place, I was hiking there 2 weeks ago and it was
                awesome!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: '25rem',
              border: 'none',
              padding: '10px',
              borderRadius: '15px',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }}
          >
            <Card.Body>
              <Card.Title>
                <Image
                  fluid
                  roundedCircle
                  src={user}
                  width="50px"
                  height="50px"
                />
                <br />
                Matija Alilovic
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
              </Card.Subtitle>
              <Card.Text>
                What an amazing place, I was hiking there 2 weeks ago and it was
                awesome!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: '25rem',
              border: 'none',
              padding: '10px',
              borderRadius: '15px',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }}
          >
            <Card.Body>
              <Card.Title>
                <Image
                  fluid
                  roundedCircle
                  src={user}
                  width="50px"
                  height="50px"
                />
                <br />
                Matija Alilovic
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
                <MdStarBorder />
              </Card.Subtitle>
              <Card.Text>
                What an amazing place, I was hiking there 2 weeks ago and it was
                awesome!
              </Card.Text>
            </Card.Body>
          </Card>
        </TestimonialList>
      </Testimonials>
      <NewsletterWrapper data-aos="fade-up">
        <Newsletter>
          <NewsletterForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1>Subscribe to our newsletter</h1>
            <span>Recieve latest news, updates, every week</span>
            <br />
            <InputContainer>
              <input type="email" placeholder="Your email here" required />
              <button type="submit">Join now</button>
            </InputContainer>
          </NewsletterForm>
          <img src={newsletterImg} alt="" />
        </Newsletter>
      </NewsletterWrapper>
      <Footer />
    </>
  );
};

export default HomePage;
