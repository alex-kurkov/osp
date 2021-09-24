import React from 'react';
import styled from 'styled-components';
import Cart from './cart';
import ThemeToggler from './theme-toggler';
import Logo from './logo'
import BurgerIcon from '../ui/icons/burger-icon';

const StyledHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 4px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.colors.background};
  height: 60px;
  z-index: 10;
  `
const Wrap = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  align-items: center;
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo width="120px" height="60px" />
      <Wrap>
        <ThemeToggler />
        <Cart width="30px" height="30px" />
        <BurgerIcon width="30px" height="30px" />

      </Wrap>
    </StyledHeader>
  )
};

export default Header;
