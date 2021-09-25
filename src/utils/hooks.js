import { useEffect, useState } from 'react';

export const useModalDisclosure = (initState = false, { onOpen, onClose }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    if (isOpenModal !== initState) setIsOpenModal(initState);
  // eslint-disable-next-line
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

export const useLocalStorage = (key, initialValue = '') => {
  const [ storedValue, setStoredValue ] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      return initialValue;
    };
  })

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  };

  return[ storedValue, setValue ];
};

