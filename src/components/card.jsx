import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LikeIcon from '../ui/icons/like-icon';
import { addIngredient, removeIngredient } from '../services/reducers/cart/cartSlice'
import { API_URL } from '../utils/requests';

const StyledCard = styled.article`
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  height: auto;
  padding-bottom: 100%;
  position: relative;
  box-shadow: ${(p) => p.theme.colors.textPrimary} 0 0 8px 1px;
  background-image: url(${p => `${API_URL}${p.img}`});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const Block = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(to bottom, transparent, ${(p) => p.theme.colors.background});
  padding: 4px;
  justify-content: end;
`
const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  line-heighth: 1.2;
  color: #ebebeb;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
  min-height: 26px;
  `
const StyledDescription = styled.p`
  color: ${p => p.theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  overflow: hidden;
  margin: 0;
  height: 100%;
  border-bottom: 1px solid ${p => p.theme.colors.textPrimary};
  `
const InfoBlock = styled.div`
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
  const dispatch = useDispatch()
  const {
    name, price, image, slug, description
  } = item;
  const { chosen } = useSelector(store => store.cart);

  const [added, setAdded] = useState(false)

  useEffect(() => {
    const itemFound = chosen.find(i => i.slug === slug)
    setAdded(itemFound)
  }, [chosen, slug])

  const handleAdd = () => {
    if (added) {
      dispatch(removeIngredient(item))
    } else {
      dispatch(addIngredient(item))
    }
  }

  return (
    <StyledCard img={image.url}>
      <Block>
        <Title>{name}</Title>
{/*         <StyledDescription> {description} </StyledDescription> */}
        <InfoBlock>
          <Price>{price} P.-</Price>
          <LikeIcon width="32px" height="32px" liked={added} onClick={handleAdd} />          
        </InfoBlock>
      </Block>
    </StyledCard>
  )
}

export default Card;
