import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { navMenuItems } from '../utils/data'

const Page = styled.div`
  width: 100%100%;
  height: calc(100vh - 120px);
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 4px;
`
const MenuItem = styled.div`
  background-image: url(${p=>p.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
const TextWrap = styled.div`
  height: 60px;
  width: 100%;
  text-align: center;
  background: 
    linear-gradient(to bottom, ${p => p.theme.colors.transparent}, ${p => p.theme.colors.background} 50%);
`
const MenuText = styled.span`
  font-size: 32px;
  text-align: left;
  line-height: 1.2;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
`

const HomePage = () => {
  const history = useHistory();
  const [main, ...data] = navMenuItems; 

  return (
    <Page>
      {data.map((item) => {
        return (
        <MenuItem key={item.slug} image={item.image} onClick={() => history.push(item.url)}>
          <TextWrap>
            <MenuText>{item.name}</MenuText>
          </TextWrap>
        </MenuItem>
      )})}
    </Page>
  )
}

export default HomePage;
