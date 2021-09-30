import React from 'react';
import styled from 'styled-components';
import { API_URL } from '../utils/requests';
import thumbTemplate from '../images/thumb-template.png';
import Modal from './modal';

const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr min-content;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`
const ChosenInformer = styled.span`
  display: inline-block;
  color: ${p => p.added? p.theme.colors.added : p.theme.colors.unadded};
  font-size: 12px;
  text-align: left;
  line-height: 1.2;
  margin: 0 0 8px 0;
`
const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`
const Description = styled.p`
  font-size: 16px;
  text-align: left;
  line-height: 1.2;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
  `
const Price = styled.p`
  font-size: 20px;
  line-height: 1.2;
  margin: 0;
  font-weight: 600;
  text-align: right;
  color: ${p => p.theme.colors.textPrimary};
`
const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Weight = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 1.2;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
`
const StyledButton = styled.a`
  width: calc(100% - 8px);
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
  margin: 4px auto;
`;

const CardDetails = ({ item, handleAdd, added, closeModalCb }) => {
  const {
    name, price, image, description, nutrition
  } = item;

  return (
    <Modal onClose={closeModalCb} title={name}>
        <ChosenInformer added={added}>
          {added ? 'Выбрано' : 'Пока не в корзине'}
        </ChosenInformer>

      <InfoBlock>
        <Image src={image && image.url ? `${API_URL}${image.url}` : thumbTemplate} loading="lazy"/>
        <Description>{description}</Description>
        <PriceWrap>
          <Price>{price}.-</Price>
          <Weight>{nutrition?.weight ? `${nutrition.weight} гр.` : ''}</Weight>
        </PriceWrap>
      </InfoBlock>
      <StyledButton onClick={handleAdd}>
        {added? 'Убрать из заказа' : 'Добавить к заказу'}
      </StyledButton>
    </Modal>
  )
}

export default CardDetails;
