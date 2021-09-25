import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Tips = styled.div`
  max-width: 100%;
  height: calc(100vh - 154px);
  position: relative;
  overflow: hidden;
  padding-bottom: 100%;
  scrollbar-width: 0;
  &::-webkit-scrollbar {
      display: none;
      width: 0;
  }
`
const Iframe = styled.iframe`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 1000px;
  border: 0;
`;
const Informer = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  line-height: 1.2;
  padding-right: 40px;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
  min-height: 26px;
`

const TipsPage = () => {
  return (
    <Tips>
      <Iframe
        loading="lazy" 
        allowfullscreen
        allow="payment"
        sandbox="allow-forms allow-same-origin allow-scripts"
        src="https://tips.yandex.ru/guest/payment/303640">
          <Informer>
            Ваш браузер не поддерживает технологию встроенных фреймов,
            но можно оставить чаевые по ссылке ниже
          </Informer>
          <Link to="https://tips.yandex.ru/guest/payment/303640" />
      </Iframe>
    </Tips>
  )
}

export default TipsPage;
