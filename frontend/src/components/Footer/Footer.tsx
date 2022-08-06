import React from "react";
import styled from "styled-components";
import familyHiking from "../../assets/img/illustrations/mainPage.svg";

const FooterWrapper = styled.footer`
  padding: 8rem 12rem;
  margin-top: 8rem;
  background-color: var(--primary);

  display: flex;
  gap: 4rem;

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

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumn>
        <h1>MHikes</h1>
        <img src={familyHiking} alt="" />
      </FooterColumn>
      <FooterColumn></FooterColumn>
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
      <FooterColumn></FooterColumn>
    </FooterWrapper>
  );
};

export default Footer;
