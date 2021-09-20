import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Modal from './modal';
import { openModal, closeModal } from '../services/reducers/control/controlSlice';
import ChosenList from './chosen-list'

const StyledCart = styled.article`
  width: 50%;
  max-width: 50%;
  height: 30px;
  box-sizing: border-box;
  position: relative;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${(p) => p.theme.colors.activeElementBg};
  color: ${(p) => p.theme.colors.textPrimary};
  box-shadow: ${(p) => p.theme.colors.textPrimary} 0 0 5px -1px;
`
const CountTag = styled.div`
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
      { !!modalVisible && 
        <Modal onClose={closeModalCb} title="Мой выбор">
          <ChosenList goods={chosen} />
        </Modal>
      }
      МОЙ ВЫБОР
      {
      !!chosen.length && 
        <CountTag>
          {chosen.length}
        </CountTag>
      }
    </StyledCart>
  )
}

export default Cart
