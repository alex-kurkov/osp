import React from 'react'
import styled from 'styled-components'
import CardsList from './cards-list'

const StyledMain = styled.main`
  width: 100%;
  margin-top: 144px;
  background-color: ${(p) => p.theme.colors.background};
`

const Main = () => (
  <StyledMain>
    <CardsList />
  </StyledMain>
)

export default Main
