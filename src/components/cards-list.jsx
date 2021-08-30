import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Card from './card'

const List = styled.ul`
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 144px;
  `
const ListItem = styled.li`
  list-style-type: none;
  padding: 8px;
`

const CardsList = () => {
  const { goods } = useSelector(store => store.cart)

  return (
    <List>
      {
        goods.map(item => {
          return (
            <ListItem key={item.id}>
              <Card item={item} />
            </ListItem>
          )
        })
      }
    </List>

  )
}

export default CardsList
