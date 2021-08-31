import React from 'react';
import styled from 'styled-components';
import DeliveryButton from './delivery-button';
import Cart from './cart';
import ThemeToggler from './theme-toggler';
import Logo from './logo'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 160px;
  display: block;
  padding: 4px 8px;
  background-color: ${(p) => p.theme.colors.background};
  z-index: 10;
`
const LogoWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`
const BtnWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <Logo width="160px" height="80px" />
        <ThemeToggler />
      </LogoWrapper>
      <BtnWrapper>
        <Cart />
        <DeliveryButton />
      </BtnWrapper>
    </StyledHeader>
  )
};

export default Header;
