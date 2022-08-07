import React from 'react';

import styled from 'styled-components';

import { Image } from 'react-bootstrap';
import illustration from '../../assets/img/illustrations/looking.svg';

const Wrapper = styled.div`
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 100px;
  z-index: 6;

  transition: all 0.25s;

  opacity: 0;
  visibility: hidden;

  @media only screen and (max-device-width: 880px) {
    padding: 0;
  }

  @media only screen and (max-width: 1224px) {
    img {
      display: none;
    }
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 2rem;
`;

const MenuItem = styled.li``;

const MenuLink = styled.a`
  position: relative;
  display: inline-flex;
  font-weight: 500;
  font-size: 3rem;
  color: white;
  text-transform: uppercase;
  text-decoration: none;

  :hover {
    color: #c9c9c9;
  }
`;

interface Props {
  sideMenuActive: boolean;
}

const SideMenu: React.FC<Props> = ({ sideMenuActive }) => {
  return (
    <Wrapper
      style={{
        opacity: `${sideMenuActive ? '1' : '0'}`,
        visibility: `${sideMenuActive ? 'visible' : 'hidden'}`,
      }}
    >
      <MenuList>
        <MenuItem>
          <MenuLink href="#">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">My Profile</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Explore Trails</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Login</MenuLink>
        </MenuItem>
      </MenuList>
      <Image src={illustration} />
    </Wrapper>
  );
};

export default SideMenu;
