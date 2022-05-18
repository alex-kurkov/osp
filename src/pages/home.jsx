import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { navMenuItems } from '../utils/data'

const Page = styled.div`
  width: clamp(320px, 80%, 640px);
  height: calc(100vh - 120px);
  margin: 0 auto;
  display: grid;
  grid-template-rows: min-content repeat(3, 1fr);
  gap: 20px;
`
const MenuItem = styled.div`
  background-image: url(${p=>p.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${(p) => p.theme.colors.textPrimary} 0 0 8px 1px;
  border-radius: 8px;
  width: calc(100% - 24px);
  margin: 0 auto;
`
const TextWrap = styled.div`
  height: 60px;
  width: 100%;
  text-align: center;
  border-radius: 0 0 8px 8px;
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
const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  padding: 12px 60px;
  margin: 0 auto;
  width: 100%;
  height: auto;
  color: ${p => p.theme.colors.textPrimary};
  text-align: center;
`

const HomePage = () => {
  const history = useHistory();
  // eslint-disable-next-line
  const [main, ...data] = navMenuItems; 

  return (
    <Page>
      <Title>Электронное меню ресторана Остров Суши</Title>
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
