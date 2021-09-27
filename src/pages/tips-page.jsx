import React from "react";
import styled from 'styled-components';
import { TIPS_URL, socialLinks, contacts } from "../utils/data";
import { LinkIcon } from '../ui/icons'

const Tips = styled.div`
  max-width: 100%;
  height: calc(100vh - 120px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  scrollbar-width: 0;
  padding: 8px;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  `
const Wrap = styled.div`
  position: relative;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
  &::after {
    content: '';
    height: 100%;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 2px;
    width: 100%;
    background: linear-gradient(to left, ${p => p.theme.colors.transparent}, ${p => p.theme.colors.textPrimary});
  }
  &:last-of-type::after {
    display: none;
  }
  `

const TwoColumnsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px;
  gap: 4px;
  align-items: center;
  margin-bottom: 8px;
  position: relative;
  &:last-of-type {
    margin-bottom: 0;
  }
  &::after {
    content: '';
    height: 100%;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 2px;
    width: 50%;
    background: linear-gradient(to left, ${p => p.theme.colors.transparent}, ${p => p.theme.colors.textPrimary});
  }
  &:last-of-type::after {
    display: none;
  }
  `

const Title = styled.h4`
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  line-height: 1.2;
  margin-bottom: 4px;
`
const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  line-height: 1.2;
  opacity: .7;
`

const TipsPage = () => {
  return (
    <Tips>
      <Wrap>
        <Title>Чаевые</Title>
        <TwoColumnsWrap>
          <Text> 
            Вы можете оставить чаевые Вашему официанту на сервисе Яндекс.Еда. Просто нажмите на значок справа
          </Text>
          <a target="_blank" rel="noreferrer" href={TIPS_URL}>
            <LinkIcon width="60px" height="60px"/>
          </a>
        </TwoColumnsWrap>
      </Wrap>
      <Wrap>
        <Title>Соцсети</Title>
        {socialLinks.map((item) => {
          return (
            <TwoColumnsWrap key={item.slug}>
              <Text>{item.name}</Text>
              <a target="_blank" rel="noreferrer" href={item.url}>
                {item.logo}
              </a>
            </TwoColumnsWrap>
          )
        })}
      </Wrap>
      <Wrap>
        <Title>Доставка</Title>
        <TwoColumnsWrap>
          <Text>Заказать доставку из Острова Суши можете на сайте</Text>
          <a target="_blank" rel="noreferrer" href="https://nursushi.ru">
            <LinkIcon width="60px" height="60px"/>
          </a>
        </TwoColumnsWrap>
      </Wrap>
      <Wrap>
        <Title>Контакты</Title>
          {contacts.map((item) => {
            return (
              <TwoColumnsWrap key={item.slug}>
                <Text>{item.name}</Text>
                <a target="_blank" rel="noreferrer" href={item.url}>
                  {item.logo}
                </a>
              </TwoColumnsWrap>
            )
          })}
      </Wrap>
    </Tips>
  )
}

export default TipsPage;
