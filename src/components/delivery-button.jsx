import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  width: 50%;
  height: 30px;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.activeElementBg};
  color: ${(p) => p.theme.colors.textPrimary};
  box-shadow: ${(p) => p.theme.colors.textPrimary} 0 0 5px -1px;
  text-decoration: none;
`;

const DeliveryButton = () => {
  return (
    <StyledButton href="https://nursushi.ru" target="_blank">
      ДОСТАВКА
    </StyledButton>
  )
}

export default DeliveryButton;
