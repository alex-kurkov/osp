import React from "react";
import styled from 'styled-components';

const Tips = styled.div`
  max-width: 100%;
  height: calc(100vh - 100px);
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
  width: 100%;
  height: 500px;
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
      <Informer>
        <a target="_blank" href="https://tips.yandex.ru/guest/payment/303640"> Ваш браузер не поддерживает технологию встроенных фреймов,
          но можно оставить чаевые по ссылке ниже
        </a>
      </Informer>
      <Iframe
        loading="lazy" 
        allowfullscreen
        allow="payment"
        sandbox="allow-forms allow-same-origin allow-scripts allow-modals allow-popups"
        src="https://tips.yandex.ru/guest/payment/303640">
      </Iframe>
    </Tips>
  )
}

export default TipsPage;
