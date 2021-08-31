import React from 'react'
import styled from 'styled-components'
import { goods } from '../utils/hardcode'

const Navigation = styled.nav`
  width: 100%;
  margin-top: 144px;
  background-color: ${(p) => p.theme.colors.background};
`

const ActiveMenuItem = ({ text }) => (
 <>{text}</>
)


const DishesNav = () => {

  return (
    <Navigation>
      <ActiveMenuItem text=":rewjwerhivewrh"/>
      <ChevronItem onclick={() => console.log('okj')} />
    </Navigation>
  )
  }

export default DishesNav
