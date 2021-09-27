import React from 'react'
import styled from 'styled-components'
import { BarlistCard, Card } from '.'

const List = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  flex-flow: column nowrap;
  scroll-snap-type: y mandatory;

`
const ListItem = styled.li`
  list-style-type: none;
  padding: 8px;
  scroll-snap-align: start;
`

const CardsList = ({goods, type}) => {
  return (
    <List>
      { goods && !!goods.length &&
        goods.map(item => {
          return (
            <ListItem key={item.slug}>
              {type === 'menu' ? <Card item={item} /> : <BarlistCard item={item} />}
            </ListItem>
          )
        })
      }
    </List>

  )
}

export default CardsList;
