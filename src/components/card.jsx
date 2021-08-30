import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import LikeIcon from '../ui/icons/like-icon'
import { addIngredient, removeIngredient } from '../services/reducers/cart/cartSlice'

const StyledCard = styled.article`
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  height: auto;
  padding-bottom: 100%;
  position: relative;
  box-shadow: ${(p) => p.theme.colors.textPrimary} 0 0 8px 1px;
  background-image: url(${p => p.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const Block = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: linear-gradient(to bottom, transparent, ${(p) => p.theme.colors.background});
  padding: 4px;
`
const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  text-overflow: hidden;
  color: ${p => p.theme.colors.textPrimary};
  margin: 0 0 4px 0;
`
const InfoBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  width: calc(100% - 8px);
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
    <StyledCard img={image}>
      <Block>
        <Title>{name}</Title>
        <InfoBlock>
          <Price>{price} P.-</Price>
          <LikeIcon liked={added} onClick={handleAdd} />
        </InfoBlock>
      </Block>
    </StyledCard>
  )
}

export default Card
