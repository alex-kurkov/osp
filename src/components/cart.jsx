import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Modal from './modal';
import { openModal, closeModal } from '../services/reducers/control/controlSlice';
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
  const { modalVisible } = useSelector((state) => state.control);
  const dispatch = useDispatch();
  const closeModalCb = () => dispatch(closeModal());

  return (
    <StyledCart onClick={() => dispatch(openModal())}>
      <CartIcon width="30px" height="30px"/>
      {
        !!chosen.length && 
        <CountTag>
          {chosen.length}
        </CountTag>
      }
    { !!modalVisible && 
      <Modal onClose={closeModalCb} title="Мой выбор">
        <ChosenList goods={chosen} />
      </Modal>
    }
    </StyledCart>
  )
}

export default Cart
