import { useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import CloseIcon from '../ui/icons/close-icon'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 12;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
`
const StyledModal = styled.div`
  max-width: 720px;
  width: calc(100% - 16px);
  margin: 0 auto;
  height: fit-content;
  min-height: 120px;
  max-height: 90%;
  z-index: 15;
  background-color:${p => p.theme.colors.background};
  border-radius: 20px;
  position: relative;
  padding: 8px;
`
const IconWrap = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 32px;
  gap: 4px;
  margin: 0;
`
const Title = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  color: ${p => p.theme.colors.textPrimary};
`
const Content = styled.section`
  max-height: 100%;
  overflow: hidden;
  width: 100%;
`

const modalRoot = document.getElementById('modals');

const Modal = ({ title = '', onClose = () => {}, children }) => {
  const handleOverlayClick = (e) => {
    e.stopPropagation();
    if (e.target !== e.currentTarget) return;
    onClose();
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key !== 'Escape') return;
      onClose();
    };
    window.addEventListener('keydown', closeByEscape);
    return () => window.removeEventListener('keydown', closeByEscape);
  }, [onClose]);

  const handleIconClick = (e) => {
    e.stopPropagation();
    onClose();
  }

  return modalRoot && ReactDOM.createPortal(
    (
      <Overlay data-cy="modal-overlay" onClick={(handleOverlayClick)} >
        <StyledModal>
          <IconWrap>
            <Title>{title}</Title>
            <CloseIcon onClick={handleIconClick} width="32" height="32" />
          </IconWrap>
          <Content>
            {children}
          </Content>
        </StyledModal>
      </Overlay>
    ),
    modalRoot,
  );
};

export default Modal;
