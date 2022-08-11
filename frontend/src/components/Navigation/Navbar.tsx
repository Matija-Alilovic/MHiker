import React, { useState } from 'react';
import styled from 'styled-components';

import SearchBox from './SearchBox';

import logo from '../../assets/img/logo.svg';
import user from '../../assets/img/user.png';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import SideMenu from '../SideMenu/SideMenu';
import { Link } from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import { useSelector } from 'react-redux';
import { IInitStateUser } from '../../redux/reducers/authReducer';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background-color: white;
  padding-top: 30px;
  top: 0;
  position: fixed;
  width: 100%;
  padding: 25px 50px;
  z-index: 2;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 2rem;
  font-weight: 500;

  color: #202e5c;

  :hover {
    cursor: pointer;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  font-size: 3.2rem;

  color: #202e5c;
  z-index: 1242;

  img {
    width: 50px;
  }

  :hover {
    cursor: pointer;
  }
`;

const LogoImg = styled.img`
  border-radius: 10px;
  width: 50px;
`;

const UserImg = styled(Image)`
  border: 3px solid var(--text);
`;

interface Props {
  children: React.ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  const authData: IInitStateUser = useSelector((state: any) => state.auth);

  const [sideMenuActive, setSideMenuActive] = useState(false);

  return (
    <Wrapper>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Left>
          <LogoImg src={logo} />
          <span>MHikes</span>
        </Left>
      </Link>
      {children}
      <Right>
        {!sideMenuActive && (
          <BiMenuAltRight
            onClick={() => {
              setSideMenuActive(true);
            }}
          />
        )}
        {sideMenuActive && (
          <AiOutlineClose
            color="white"
            onClick={() => {
              setSideMenuActive(false);
            }}
          />
        )}
        {authData.loggedIn && (
          <UserImg src={authData.photoUrl} roundedCircle fluid />
        )}
      </Right>
      <SideMenu sideMenuActive={sideMenuActive} />
    </Wrapper>
  );
};

export default Navbar;
