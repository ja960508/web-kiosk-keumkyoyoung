import React, { FC } from 'react';
import styled from 'styled-components';
import { ModalWrapper } from '../../styles/globalStyleComponent';

interface ConfirmModalProps {
  name?: string;
}

const OrderModal: FC<ConfirmModalProps> = ({}) => {
  return <ModalWrapper>ConfirmModal component </ModalWrapper>;
};

export default OrderModal;
