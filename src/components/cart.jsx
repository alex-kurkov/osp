import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Modal from './modal';
import ChosenList from './chosen-list'
import CartIcon from '../ui/icons/cart-icon';

const StyledCart = styled.article`
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  position: relative;
`
const CountTag = styled.div`
  position: absolute;
  top: -4px;
  right: -12px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.textPrimary};
  font-size: 12px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.activeElementBg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Cart = () => {
  const { chosen } = useSelector(store => store.cart);
  const [ modalVisible, setModalVisible ] = useState(false);

  return (
    <StyledCart onClick={() => setModalVisible(true)}>
      <CartIcon width="30px" height="30px"/>
      {
        !!chosen.length && 
        <CountTag>
          {chosen.length}
        </CountTag>
      }
      { modalVisible && 
        <Modal onClose={() => setModalVisible(false)} title="Мой выбор">
          <ChosenList goods={chosen} />
        </Modal>
      }
    </StyledCart>
  )
}

export default Cart
