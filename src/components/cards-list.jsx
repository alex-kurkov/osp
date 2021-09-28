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
  @media screen and (min-width: 475px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row: auto;
    grid-auto-flow: dense;
  }
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
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
