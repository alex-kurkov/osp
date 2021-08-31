import React from 'react'
import styled from 'styled-components'

const StyledMenu = styled.nav`
  transform: translateY(${p => p.toggled ? '-200px' : '0'});
  background-color: ${p => p.theme.colors.background};
  position: fixed;
  top: 154px;
  left: 0;
  width: 100%;
  height: 200px;
  transition: transform 0.15s ease-out;
  overflow: hidden;
  z-index: 5;
`
const StyledLi = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-weight: ${p => p.active ? '600' : '400'};
  transform: translateX(${p => p.active ? '10px' : '0'});
  color: ${p => p.theme.colors.textPrimary};
`

const Menu = ({ items, activeItem, onClick, toggled }) => {
  return (
      <StyledMenu toggled={toggled} >
        <ul>
          {
            !!items?.length && items.map(
              (item, idx) => (
                <StyledLi key={item.slug} onClick={() => onClick(idx)} active={activeItem === idx}>
                  {item.toUpperCase()}
                </StyledLi>
              )
            )
          }
        </ul>
      </StyledMenu>
  )
}

export default Menu
