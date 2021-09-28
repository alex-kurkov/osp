import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { closeNav } from "../services/reducers/control/controlSlice";
import CloseIcon from "../ui/icons/close-icon";
import { navMenuItems } from "../utils/data";

const StyledNavigation = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 2;
  max-height: ${p => p.open ? '10000px' : '0px'};
  transform: ${p => p.open ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${p => p.open ? '1' : '0'};
  visibility: ${p => p.open ? 'visible' : 'hidden'};
  transition: all 300ms ease-in-out;
  background-color: ${p => p.theme.colors.transparent};
  backdrop-filter: blur(4px);
`
const NavWrap = styled.nav`
  max-width: 1440px;
  background-color: ${p => p.theme.colors.background};
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 4px;
  padding: 16px 8px;
`
const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
    bottom: -12px;
    left: 0;
    height: 2px;
    width: 40%;
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
    history.push(url);
  }
  const handleOverlayClick = (e) => {
    e.stopPropagation();
    if (e.target !== e.currentTarget) return;
    dispatch(closeNav());
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key !== 'Escape') return;
      dispatch(closeNav());
    };
    window.addEventListener('keydown', closeByEscape);
    return () => window.removeEventListener('keydown', closeByEscape);
  }, []);

  return navigationRoot && ReactDOM.createPortal((
    <StyledNavigation open={navOpen} onClick={handleOverlayClick}>
      <NavWrap>
        <LinkBox>
        {navMenuItems.map((item) => (
          <StyledLink onClick={() => handleButtonClick(item.url)} key={item.slug}>{item.name}</StyledLink>

        ))}
        </LinkBox>
        <CloseIconWrap>
          <CloseIcon width="32px" height="32px" onClick={() => dispatch(closeNav())} />
        </CloseIconWrap>

      </NavWrap>
    </StyledNavigation>
  ), navigationRoot
  )
};

export default NavigationSideMenu;
