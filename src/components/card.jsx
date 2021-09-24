import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LikeIcon from '../ui/icons/like-icon';
import { addIngredient, removeIngredient } from '../services/reducers/cart/cartSlice'
import { API_URL } from '../utils/requests';
import template from '../images/template-image.png'
import CardDetails from './card-details';
import { useModalDisclosure } from '../utils/hooks';

const StyledCard = styled.article`
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  box-shadow: ${(p) => p.theme.colors.textPrimary} 0 0 8px 1px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 8px;
`
const ImageBlock = styled.div`
  width: 100%;
  padding: 0 0 100% 0;
  height: auto;
  position: relative;
  border-radius: 4px 4px 0 0;
  `
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px 4px 0 0;
`
const Block = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border-radius: 0 0 4px 4px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: end;
`
const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  line-height: 1.2;
  padding-right: 40px;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
  min-height: 26px;
`

const PriceBlock = styled.div`
  border-top: 1px solid ${p => p.theme.colors.textPrimary};
  height: 32px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`
const Price = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${p => p.theme.colors.textPrimary};
`

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const { chosen } = useSelector(store => store.cart);
  const {
    name, price, image, slug,
  } = item;

  const [added, setAdded] = useState(chosen.find(i => i.slug === slug));
  const { isOpenModal, openModal, closeModal, toggleModal } = useModalDisclosure(false, {});

  useEffect(() => {
    const itemFound = chosen.find(i => i.slug === slug)
    setAdded(itemFound);
  }, [chosen, slug, isOpenModal])

  const handleAdd = () => {
    if (added) {
      dispatch(removeIngredient(item))
    } else {
      dispatch(addIngredient(item))
    }
  }

  return (
    <StyledCard>
      <ImageBlock onClick={toggleModal}>
        <Image loading="lazy" src={image?.url ? `${API_URL}${image.url}` : template} alt={`изображение блюда ${name} в меню ресторана Остров Суши`}/>
      </ImageBlock>
      {
        !!isOpenModal && 
          <>
            <CardDetails 
            item={item} 
            handleAdd={handleAdd} 
            added={added}
            closeModalCb={closeModal}/>
          </>
      }
      <Block>
        <Title>{name}</Title>
        <PriceBlock>
          <Price>{price} P.-</Price>
          <LikeIcon width="24px" height="24px" liked={added} onClick={handleAdd} />          
        </PriceBlock>
      </Block>
    </StyledCard>
  )
}

export default Card;
