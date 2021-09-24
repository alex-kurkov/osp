import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LikeIcon from '../ui/icons/like-icon';
import InfoIcon from '../ui/icons/info-icon';
import { addIngredient, removeIngredient } from '../services/reducers/cart/cartSlice'
import { API_URL } from '../utils/requests';
import template from '../images/template-image.png'

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

const Info = styled.div`
  width: 100%;
  max-height: ${p => p.infoVisible ? '1000px' : '0'};
  overflow: hidden;
  height: fit-content;
  transition: max-height .3s ease-in-out;
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
const StyledDescription = styled.p`
  color: ${p => p.theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  overflow: hidden;
  margin: 0 0 8px 0;
  white-space: pre-line;
`
const NutritionBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
`
const NutritionTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  line-height: 1.2;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
`
const NutritionValue = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 1.2;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
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
const InfoWrap = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 32px;
  height: 32px;
  `

const Card = ({ item }) => {
  const dispatch = useDispatch()
  const { chosen } = useSelector(store => store.cart);
  const {
    name, price, image, slug, description, nutrition
  } = item;

  const [added, setAdded] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

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
    <StyledCard>
      <ImageBlock>
        <Image loading="lazy" src={image?.url ? `${API_URL}${image.url}` : template} alt={`изображение блюда ${name} в меню ресторана Остров Суши`}/>
      </ImageBlock>
      <Block>
        <InfoWrap>
          <InfoIcon width="30px" height="30px" onClick={() => setInfoVisible(!infoVisible)} />
        </InfoWrap>
        <Title>{name}</Title>
        <Info infoVisible={infoVisible}>
            <StyledDescription> {description} </StyledDescription>
            <NutritionBlock>
              <NutritionTitle>Вес</NutritionTitle>
              <NutritionTitle>Б / Ж / У</NutritionTitle>
              <NutritionTitle>Калорийность</NutritionTitle>
              <NutritionValue>{nutrition?.weight || '-'}</NutritionValue>
              <NutritionValue>
                {nutrition?.protein || '-'} / {nutrition?.fat || '-'} / {nutrition?.carbohydrates || '-'}
              </NutritionValue>
              <NutritionValue>{nutrition?.calories || 'н/д'}</NutritionValue>
            </NutritionBlock>
        </Info>
        
        <InfoBlock>
          <Price>{price} P.-</Price>
          <LikeIcon width="34px" height="34px" liked={added} onClick={handleAdd} />          
        </InfoBlock>
      </Block>
    </StyledCard>
  )
}

export default Card;
