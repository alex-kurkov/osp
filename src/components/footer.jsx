import React from "react";
import styled from 'styled-components'

const StyledFooter = styled.footer`
  height: 40px;
  display: flex;
  overflow: hidden;
  padding: 8px;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
`;
const FooterText = styled.p`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  line-height: 1.2;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
  text-decoration: none;
`

const Footer = () => {
  const now = new Date();
  return (
    <StyledFooter>
      <FooterText>
        &copy; {now.getFullYear()} Остров Суши
      </FooterText>
      <FooterText as="a" rel="noreferrer" href="https://github.com/alex-kurkov" target="_blank">
        &copy; AK
      </FooterText>
    </StyledFooter>
  )
}

export default Footer;
