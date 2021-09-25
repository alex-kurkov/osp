import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Modal from './modal';
import ChosenList from './chosen-list'
import CartIcon from '../ui/icons/cart-icon';
import { useModalDisclosure } from '../utils/hooks';

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
  const { isOpenModal, openModal, closeModal } = useModalDisclosure(false, {});

  return (
    <StyledCart onClick={openModal}>
      <CartIcon width="30px" height="30px"/>
      {
        !!chosen.length && 
        <CountTag>
          {chosen.length}
        </CountTag>
      }
      { isOpenModal && 
        <Modal onClose={closeModal} title="Мой выбор">
          <ChosenList goods={chosen} />
        </Modal>
      }
    </StyledCart>
  )
}

export default Cart
