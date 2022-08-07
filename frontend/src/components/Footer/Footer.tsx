import React from "react";
import styled from "styled-components";
import familyHiking from "../../assets/img/illustrations/mainPage.svg";

const FooterWrapper = styled.footer`
position: relative;
  padding: 8rem 12rem;
  margin-top: 8rem;
  background-color: var(--primary);

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  img {
    width: 15rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  color: white;

  span {
    color: var(--text-primary);
  }

  span:hover {
    color: silver;
    cursor: pointer;
  }
`;

const AllRightsReserved = styled.div`
  position: absolute;
  color: white;
  bottom: 15px;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumn>
        <h1>MHikes</h1>
      </FooterColumn>
      <FooterColumn>
        <h3>Company</h3>
        <span>About</span>
        <span>Explore</span>
        <span>Profile</span>
      </FooterColumn>
      <FooterColumn>
        <h3>Contact</h3>
        <span>Help</span>
        <span>Support</span>
      </FooterColumn>
      <FooterColumn>
        <h3>More</h3>
        <span>Social Media</span>
        <span>Supporters</span>
      </FooterColumn>
      <FooterColumn>
        <h3>Say Hi!</h3>
        <span>Contact Us</span>
      </FooterColumn>
      <AllRightsReserved>
      © {new Date().getFullYear()} MHikes. All rights reserved.
      </AllRightsReserved>
    </FooterWrapper>
  );
};

export default Footer;
