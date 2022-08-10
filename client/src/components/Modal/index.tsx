import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
  toggleModal?: () => void;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ toggleModal, children }) => {
  const modalRoot = document.querySelector('#modal-root');

  if (!modalRoot) {
    throw new Error('there is no Portal Root');
  }

  return ReactDOM.createPortal(
    <>
      <ModalWrapper onClick={toggleModal}></ModalWrapper>
      {children}
    </>,
    modalRoot
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: var(--screen-width);
  height: var(--screen-height);
  background-color: black;
  opacity: 0.3;
  border-radius: calc(var(--screen-width) / (20));
  position: relative;
  color: white;
  z-index: 300;
`;
