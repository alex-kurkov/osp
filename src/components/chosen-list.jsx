import React from 'react'
import styled from 'styled-components'
import Card from './card'

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
  padding: 8px;
`

const ChosenList = ({goods}) => {
  return (
    <List>
      { goods && !!goods.length &&
        goods.map(item => {
          return (
            <ListItem key={item.slug}>
              <Card item={item} />
            </ListItem>
          )
        })
      }
    </List>

  )
}

export default ChosenList;
