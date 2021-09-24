import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledMenu = styled.nav`
  width: 100%;
  max-height: 48px;
  padding: 4px;
  overflow: hidden;
  position: relative;
/*   &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 40px;
    height: 100%;
    background: linear-gradient(90deg, ${p => p.theme.colors.background}, ${p => p.theme.colors.transparent});
    background: webkit-linear-gradient(90deg, ${p => p.theme.colors.background}, ${p => p.theme.colors.transparent});
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 40px;
    height: 100%;
    background: linear-gradient(270deg, ${p => p.theme.colors.background}, ${p => p.theme.colors.transparent});
    background: webkit-linear-gradient(270deg, ${p => p.theme.colors.background}, ${p => p.theme.colors.transparent})
  } */
`
const StyledUl = styled.ul`
  padding: 0;
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  overflow-x: scroll;
  flex-wrap: nowrap;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0;
}
`

const StyledLi = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-weight: ${p => p.active ? '600' : '400'};
  color: ${p => p.theme.colors.textPrimary};
  white-space: nowrap;
  position: relative;

  &::before{
    transition: width .3s ease-in-out;
    content: '';
    width: ${p => p.active ? '100%' : '0'};
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: 
      linear-gradient(90deg, ${p => p.theme.colors.transparent}, ${p => p.theme.colors.textPrimary});
  }

  &::after {
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    right: -6px;
    width: 1px;
    background-color: ${p => p.theme.colors.textPrimary};
  }
  &:last-of-type::after {
    display: none;
  }
`

const Menu = ({ items, activeItem, onClick }) => {
  
  useEffect(() => {
    const el = document.getElementById(`nav-${activeItem}`);
    el.scrollIntoView({ inline: "center", block: 'center' });
  }, [activeItem])

  return (
      <StyledMenu>
        <StyledUl>
          {
            !!items?.length && items.map(
              (item, idx) => (
                <StyledLi key={`${item}${item.idx}`} id={`nav-${idx}`} onClick={() => onClick(idx)} active={activeItem === idx}>
                  {item.toUpperCase()}
                </StyledLi>
              )
            )
          }
        </StyledUl>
      </StyledMenu>
  )
}

export default Menu;
