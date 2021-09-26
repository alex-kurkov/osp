import React from "react";
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { closeNav } from "../services/reducers/control/controlSlice";
import CloseIcon from "../ui/icons/close-icon";
import { navMenuItems } from "../utils/data";

const StyledNavigation = styled.nav`
  width: 100%;
  height: auto;
  max-height: ${p => p.open ? '700px' : '0px'};
  transform: ${p => p.open ? 'translateY(0)' : 'translateY(-100%)'};
  position: relative;
  opacity: ${p => p.open ? '1' : '0'};
  visibility: ${p => p.open ? 'visible' : 'hidden'};
  transition: all 300ms ease-in-out;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 4px;
  background-color: ${p => p.theme.colors.background};
  padding: 16px 8px;
`
const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px;
`
const CloseIconWrap = styled.div`
  align-self: left;
`
const StyledLink = styled.a`
  font-size: 24px;
  text-align: left;
  line-height: 1.2;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
  text-decoration: none;
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    height: 100%;
    position: absolute;
    bottom: -8px;
    left: 0;
    height: 2px;
    width: 30%;
    background: linear-gradient(to left, ${p => p.theme.colors.transparent}, ${p => p.theme.colors.textPrimary});
  }
  &:last-of-type::after {
    display: none;
  }
  &:last-of-type {
    margin-bottom: 4px;
  }
`
const navigationRoot = document.getElementById('navigation');

const NavigationSideMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { navOpen } = useSelector(store => store.control);

  const handleButtonClick = (url) => {
    dispatch(closeNav());
    setTimeout(() => {
      history.push(url);
    }, 320)
  }

  return navigationRoot && ReactDOM.createPortal((
    <StyledNavigation open={navOpen}>
      <LinkBox>
      {navMenuItems.map((item) => (
        <StyledLink onClick={() => handleButtonClick(item.url)} key={item.slug}>{item.name}</StyledLink>

      ))}
      </LinkBox>
      <CloseIconWrap>
        <CloseIcon width="32px" height="32px" onClick={() => dispatch(closeNav())} />
      </CloseIconWrap>
    </StyledNavigation>
  ), navigationRoot
  )
};

export default NavigationSideMenu;
