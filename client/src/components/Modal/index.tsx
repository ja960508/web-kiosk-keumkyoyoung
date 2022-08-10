import React, { FC } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen?: boolean;
}

const Modal: FC<ModalProps> = ({}) => {
  const modalRoot = document.querySelector('#modal-root');

  if (!modalRoot) {
    throw new Error('there is no Portal Root');
  }

  return ReactDOM.createPortal(<div>안녕하세요 저는 모달입니다.</div>, modalRoot);
};

export default Modal;
