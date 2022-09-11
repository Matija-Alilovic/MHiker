import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { IInitStateUser } from '../redux/reducers/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';

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
import { addTrails } from '../firebase/handlers/trailHandlers';
import {
  setSpinnerActive,
  setSpinnerDisable,
  toggleSpinner,
} from '../redux/reducers/spinnerReducer';
import {
  handleDeleteProfileTrail,
  handleGetProfileTrails,
  handleUpdateProfileImage,
} from '../firebase/handlers/authHandlers';
import { ITrail } from '../redux/reducers/trailReducer';

import { MdPhotoCamera } from 'react-icons/md';

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
  position: relative;
`;

const UserImg = styled(Image)`
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
  height: 30rem;

  border: none;
  box-shadow: rgba(100, 100, 111, 0.12) 0px 7px 29px 0px;
  position: relative;
`;

const TrailCardDropDownMenu = styled(Dropdown)`
  position: absolute;
  right: 5px;
  top: 5px;
`;

const TrailCardImage = styled(Card.Img)`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const EmptyCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 22rem;
  height: 30rem;
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

const MdPhotoCameraIcon = styled(MdPhotoCamera)`
  position: absolute;
  font-size: 12rem;
  opacity: 0;

  padding: 4rem;
  z-index: 5;
  left: 0.5rem;
  top: -6.5rem;

  color: var(--primary-text);

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const ProfileImageModal = styled(Modal)``;

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authData: IInitStateUser = useSelector((state: any) => state.auth);

  const [showAddTrailModal, setShowAddTrailModal] = useState(false);
  const [showProfileImageModal, setShowProfileImageModal] = useState(false);

  const [files, setFile] = useState<any>();
  const [profileImageFile, setProfileImageFile] = useState<any>();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const onAddTrailHandler = async (event: any) => {
    event.preventDefault();

    dispatch(toggleSpinner());

    const urlArray = [];

    for (let index = 0; index < 4; index++) {
      if (files[index] !== undefined) {
        const image = ref(storage, `images/${files[index].name + v4()}`);

        await uploadBytes(image, files[index]);

        const downloadUrl = await getDownloadURL(image);

        urlArray.push(downloadUrl);
      }
    }

    const emptyArray: any = [];

    if (
      nameRef.current?.value != null &&
      descriptionRef.current?.value != null
    ) {
      addTrails(
        authData.uid,
        authData.username,
        nameRef.current?.value,
        descriptionRef.current?.value,
        urlArray,
        emptyArray,
        dispatch
      );
    }

    toast('Sucessfully Created Trail Post!');
    handleGetProfileTrails(authData.uid, dispatch);

    dispatch(toggleSpinner());
  };

  const onAddProfileImageHandler = async (event: any) => {
    event.preventDefault();

    dispatch(setSpinnerActive());

    if (profileImageFile !== undefined) {
      console.log('Eke');
      const image = ref(storage, `images/${profileImageFile.name + v4()}`);

      await uploadBytes(image, profileImageFile);

      const downloadUrl = await getDownloadURL(image);

      handleUpdateProfileImage(downloadUrl, dispatch);
    }
    dispatch(setSpinnerDisable());

    toast('Sucessfully Changed Profile Image!');
  };

  useEffect(() => {
    handleGetProfileTrails(authData.uid, dispatch);
    !authData.loggedIn && navigate('/login');
  }, []);

  return (
    <>
      <Navbar>{}</Navbar>
      <ProfileBackgroundImage src={profile_background} alt="" />
      <ProfileWrapper>
        <Top>
          <Left>
            <MdPhotoCameraIcon
              onClick={() => {
                setShowProfileImageModal(true);
              }}
            />
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
              <EmptyCard onClick={() => setShowAddTrailModal(true)}>
                <FaPlusCircle />
                <h2>Add Trail</h2>
              </EmptyCard>
              {authData.trails.map((item: ITrail) => (
                <TrailCard>
                  <TrailCardImage variant="top" src={item.images[0]} />
                  <Card.Body>
                    <Card.Text>
                      <Image
                        fluid
                        rounded
                        src={authData.photoUrl}
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
                  <TrailCardDropDownMenu>
                    <Dropdown.Toggle
                      style={{
                        backgroundColor: 'var(--primary)',
                        border: 'none',
                        height: '35px',
                        width: '36px',
                      }}
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          handleDeleteProfileTrail(item.id, item.uid, dispatch);
                        }}
                      >
                        Delete
                      </Dropdown.Item>
                      <Dropdown.Item>Edit</Dropdown.Item>
                    </Dropdown.Menu>
                  </TrailCardDropDownMenu>
                </TrailCard>
              ))}
            </Trails>
          </BottomRight>
        </Bottom>
      </ProfileWrapper>
      <Modal
        show={showAddTrailModal}
        onHide={() => setShowAddTrailModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Trail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={true} onSubmit={onAddTrailHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                placeholder="Enter Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                ref={descriptionRef}
                as="textarea"
                type="text"
                placeholder="Description"
                maxLength={40}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image (up to 4 images)</Form.Label>
              <Form.Control
                onChange={(event: any) => {
                  setFile(event.target.files);
                }}
                type="file"
                accept="image/*"
                required
                multiple
                maxLength={4}
              />
            </Form.Group>
            <Button
              type="submit"
              style={{ backgroundColor: 'var(--primary)', border: 'none' }}
            >
              Create
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowAddTrailModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ProfileImageModal
        show={showProfileImageModal}
        onHide={() => setShowProfileImageModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Profile Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={true} onSubmit={onAddProfileImageHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image (up to 4 images)</Form.Label>
              <Form.Control
                onChange={(event: any) => {
                  setProfileImageFile(event.target.files[0]);
                }}
                type="file"
                accept="image/*"
                required
              />
            </Form.Group>
            <Button
              type="submit"
              style={{ backgroundColor: 'var(--primary)', border: 'none' }}
            >
              Create
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowProfileImageModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </ProfileImageModal>
    </>
  );
};

export default ProfilePage;
