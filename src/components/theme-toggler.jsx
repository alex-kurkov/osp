import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../services/reducers/theme/themeSlice';
import MoonIcon from '../ui/icons/moon-icon';
import SunIcon from '../ui/icons/sun-icon';

const Wrapper = styled.article`
  display: block;
  box-shadow: ${(p) => p.theme.colors.textPrimary} 0 0 4px -1px;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`
const Switch = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: ${(p) => p.theme.colors.activeElementBg};
  padding: 0 3px;
  position: relative;
  box-sizing: border-box;
`
const Icon = styled.div`
  position: absolute;
  top: 3px;
  left: ${(p) => p.activeTheme === 'dark' ? '3px' : '33px'};
`
const Bulb = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.textPrimary};
  position: absolute;
  top: 3px;
  left: ${(p) => p.activeTheme === 'light' ? '3px' : '33px'};
  transition: all .3s ease;
  /* box-shadow: ${(p) => p.theme.colors.textPrimary} 0px 0px 5px; */
`

const ThemeToggler = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state)

  return (
    <Wrapper onClick={() => dispatch(toggleTheme())}>
      <Switch activeTheme={theme.active}>
        <Icon activeTheme={theme.active}>
          {theme.active === 'dark' ? <SunIcon /> : <MoonIcon /> }
        </Icon>
        <Bulb activeTheme={theme.active} />
      </Switch>
    </Wrapper>
  )
}

export default ThemeToggler
