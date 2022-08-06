import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 8rem 12rem;
  margin-top: 8rem;
  background-color: var(--primary);

  display: flex;
  gap: 2rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumn></FooterColumn>
      <FooterColumn></FooterColumn>
      <FooterColumn></FooterColumn>
      <FooterColumn></FooterColumn>
    </FooterWrapper>
  );
};

export default Footer;
