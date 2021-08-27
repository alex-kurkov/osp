import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addIngredient, removeIngredient } from '../services/reducers/cart/cartSlice'

const StyledCard = styled.article`
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  background-color: ${p => p.theme.colors.activeElementBg};
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  align-self: center;
  text-overflow: hidden;
  color: ${p => p.theme.colors.textPrimary};
`
const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`
const InfoBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 4px;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`
const Price = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${p => p.theme.colors.textPrimary};
`
const ChooseBtn = styled.div`
  &:hover {
    cursor: pointer;
  }
  color: ${p => p.theme.colors.textPrimary};
  font-size: 20px;
  font-weight: 500;
  border-bottom: ${p => 
    p.added ? '2px solid red' : ' none'
  };
`

const Card = ({ item }) => {
  const dispatch = useDispatch()
  const {
    name, price, image, id
  } = item
  const { chosen } = useSelector(store => store.cart)

  const [added, setAdded] = useState(false)

  useEffect(() => {
    const itemFound = chosen.find(i => i.id === id)
    setAdded(itemFound)
  }, [chosen, id])

  const handleAdd = () => {
    if (added) {
      dispatch(removeIngredient(item))
    } else {
      dispatch(addIngredient(item))
    }
  }

  return (
    <StyledCard>
      <Title>{name}</Title>
      <Image src={image} />
      <InfoBlock>
        <Price>{price}</Price>
        <ChooseBtn added={added} onClick={handleAdd}>ОТЛОЖИТЬ</ChooseBtn>
      </InfoBlock>

    </StyledCard>
  )
}

export default Card
