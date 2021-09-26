import React from 'react';
import styled from 'styled-components';
import Cart from './cart';
import ThemeToggler from './theme-toggler';
import Logo from './logo'
import BurgerIcon from '../ui/icons/burger-icon';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { openNav } from '../services/reducers/control/controlSlice';

const StyledHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  padding: 4px 8px;
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
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
`

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <Logo handleClick={() => history.push('/')} width="120px" height="60px" />
      <Wrap>
        <ThemeToggler />
        <Cart width="30px" height="30px" />
        <BurgerIcon width="30px" height="30px" onClick={() => dispatch(openNav())} />
      </Wrap>
    </StyledHeader>
  )
};

export default Header;
