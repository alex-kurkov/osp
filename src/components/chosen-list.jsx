import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeIngredient } from '../services/reducers/cart/cartSlice'
import thumbTemplate from '../images/thumb-template.png';
import { API_URL } from '../utils/requests';
import TrashIcon from '../ui/icons/trash-icon';

const List = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
`
const ListItem = styled.li`
  list-style-type: none;
`
const StyledCard = styled.article`
  display: grid;
  grid-template-columns: 40px 1fr min-content 40px;
  gap: 2px;
  align-items: center;
`
const Image = styled.img`
  width: 40px;
  height: 40px;
`
const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  line-height: 1.2;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 12px;
`
const Price = styled.h3`
  font-size: 16px;
  font-weight: 600;
  text-align: right;
  line-height: 1.2;
  margin: 0;
  color: ${p => p.theme.colors.textPrimary};
`

const ModalCard = ({ item }) => {
  const dispatch = useDispatch();
  const {
    name, price, image
  } = item;

  return (
    <StyledCard>
      <Image src={image && image.url ? `${API_URL}${image.url}` : thumbTemplate} loading="lazy"/>
      <Title>{name}</Title>
      <Price>{price}</Price>
      <TrashIcon onClick={() => dispatch(removeIngredient(item))}>remove</TrashIcon>
    </StyledCard>
  )
}


const ChosenList = ({goods}) => {
  return (
    <List>
      { goods && !!goods.length &&
        goods.map(item => {
          return (
            <ListItem key={item.slug}>
              <ModalCard item={item} />
            </ListItem>
          )
        })
      }
    </List>

  )
}

export default ChosenList;
