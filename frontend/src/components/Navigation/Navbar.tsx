import React, { useState } from 'react';
import styled from 'styled-components';

import SearchBox from './SearchBox';

import logo from '../../assets/img/logo.svg';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import SideMenu from '../SideMenu/SideMenu';

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
  gap: 1rem;

  font-size: 3.2rem;

  color: #202e5c;
  z-index: 1242;
  :hover {
    cursor: pointer;
  }
`;

const LogoImg = styled.img`
  border-radius: 10px;
  width: 50px;
`;

interface Props {}

const Navbar: React.FC<Props> = () => {
  const [sideMenuActive, setSideMenuActive] = useState(false);

  return (
    <Wrapper>
      <Left>
        <LogoImg src={logo} />
        <span>MHikes</span>
      </Left>
      <SearchBox />
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
      </Right>
      <SideMenu sideMenuActive={sideMenuActive} />
    </Wrapper>
  );
};

export default Navbar;
