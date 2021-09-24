import { useEffect, useState } from 'react';

export const useModalDisclosure = (initState = false, { onOpen, onClose }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    if (isOpenModal !== initState) setIsOpenModal(initState);
  }, [ initState ])

  const openModal = () => {
    setIsOpenModal(true);
    if (typeof onOpen === 'function') onOpen();
  }
  const closeModal = () => {
    setIsOpenModal(false);
    if (typeof onClose === 'function') onClose();
  }
  const toggleModal = () => isOpenModal ? closeModal() : openModal();

  return { isOpenModal, openModal, closeModal, toggleModal };
}
