import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledMenu = styled.nav`
  width: 100%;
  max-height: 40px;
  padding: 0;
  overflow: hidden;
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 20px;
    height: 100%;
    background: linear-gradient(to right, ${p => p.theme.colors.background}, transparent)
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 20px;
    height: 100%;
    background: linear-gradient(to left, ${p => p.theme.colors.background}, transparent)
  }
`
const StyledUl = styled.ul`
  padding: 0;
  display: flex;
  gap: 12px;
  flex-flow: wrap;
  justify-content: flex-start;
  justify-content: flex-start;
  overflow-x: scroll;
  width: auto;
  flex-wrap: nowrap;
`

const StyledLi = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-bottom: ${p => p.active ? '1px' : '0'} ${p => p.theme.colors.textPrimary} solid;
  font-weight: ${p => p.active ? '500' : '400'};
  color: ${p => p.theme.colors.textPrimary};
  white-space: nowrap;
`

const Menu = ({ items, activeItem, onClick }) => {
  
  useEffect(() => {
    const el = document.getElementById(`nav-${activeItem}`);
    el.scrollIntoView({ inline: "center" });
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
