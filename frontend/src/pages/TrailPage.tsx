import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navigation/Navbar';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';

import trial from '../assets/img/trials/trial-1.jpg';
import { Badge, Button } from 'react-bootstrap';
import { FaFlag, FaStar } from 'react-icons/fa';
import {
  getTrailById,
  updateTrailById,
} from '../firebase/handlers/trailHandlers';

import { useNavigate, useParams } from 'react-router-dom';
import { IInitStateTrail } from '../redux/reducers/trailReducer';
import { useDispatch, useSelector } from 'react-redux';
import { IInitStateUser } from '../redux/reducers/authReducer';

const BackgroundImage = styled.img`
  position: relative;

  width: 100%;
  height: 38rem;
  object-fit: cover;
  z-index: -1;
`;

const StyledCarousel = styled(Carousel)`
  height: 38rem;

  img {
    object-fit: cover;
    height: 38rem;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: white;
  border-radius: 20px 20px 0px 0px;
  margin-top: -2rem;
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

const CommentsSection = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  color: var(--primary);
`;

const Comment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  border: 2px solid var(--primary);
  padding: 1.4rem 1.2rem;
  border-radius: 10px;

  span {
    font-size: 1.2rem;
  }
`;

const UserImg = styled(Image)`
  width: 5rem;
  height: 5rem;
`;

const CommentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin-top: 1rem;
  }

  span {
    margin-top: -0.4rem;
  }
`;

const TrailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id }: any = useParams();

  const trailData: IInitStateTrail = useSelector((state: any) => state.trails);
  const spinnerData = useSelector((state: any) => state.spinner);
  const authData: IInitStateUser = useSelector((state: any) => state.auth);

  const commentRef = useRef<HTMLInputElement | null>(null);

  const onCommentAddHandler = (e: any) => {
    e.preventDefault();

    let newComments = JSON.parse(
      JSON.stringify(trailData.currentTrail.comments)
    );

    newComments.push({
      id: authData.uid,
      text: commentRef.current?.value!,
      username: authData.username,
      userImage: authData.photoUrl,
    });

    updateTrailById(
      id,
      {
        uid: trailData.currentTrail.uid,
        username: trailData.currentTrail.username,
        name: trailData.currentTrail.name,
        description: trailData.currentTrail.description,
        images: trailData.currentTrail.images,
        comments: newComments,
      },
      dispatch
    );

    getTrailById(id, dispatch);
  };

  useEffect(() => {
    !authData.loggedIn && navigate('/login');
    getTrailById(id, dispatch);
  }, []);

  return (
    <>
      {spinnerData.active == false && (
        <>
          <Navbar>{}</Navbar>
          <StyledCarousel interval={2000}>
            {trailData.currentTrail.images.map((image) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt="Second slide"
                  />
                </Carousel.Item>
              );
            })}
          </StyledCarousel>
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
              <p>{trailData.currentTrail.description}</p>
            </OverviewContainer>
            <BookNowButton>Book Now</BookNowButton>
            <CommentsSection>
              <h2>Comments ({trailData.currentTrail.comments.length})</h2>
              <hr />
              {trailData.currentTrail.comments.map((comment) => (
                <Comment>
                  <UserImg src={comment.userImage} roundedCircle fluid />
                  <CommentTextContainer>
                    <h3>{comment.username}</h3>
                    <span>{comment.text}</span>
                  </CommentTextContainer>
                </Comment>
              ))}
              <Form onSubmit={onCommentAddHandler}>
                <InputGroup className="mb-3">
                  <Form.Control
                    required
                    ref={commentRef}
                    aria-label="Text input with dropdown button"
                  />
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: 'var(--primary)',
                      border: 'none',
                    }}
                  >
                    Comment
                  </Button>
                </InputGroup>
              </Form>
            </CommentsSection>
          </Body>
        </>
      )}
    </>
  );
};

export default TrailPage;
