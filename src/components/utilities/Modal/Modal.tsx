import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import ThemeContext from '../../../store/theme-context';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  const COLOR_CLASS = isDarkMode ? 'bg-color--black-90' : 'bg-color--black-15';
  
  if (!isOpen) return null;
  return createPortal(
    <>
      <div className='modal__backdrop' onClick={closeModal} />
      <div className={`modal__container ${COLOR_CLASS}`}>{children}</div>
    </>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
