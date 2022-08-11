import React, { FC } from 'react';
import styled from 'styled-components';
import { ModalWrapper } from '../../styles/globalStyleComponent';

interface ConfirmModalProps {
  name?: string;
}

const PaymentModal: FC<ConfirmModalProps> = ({}) => {
  return <ModalWrapper>페이먼트 component </ModalWrapper>;
};

export default PaymentModal;
