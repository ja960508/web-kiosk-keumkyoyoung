import React, { createContext, useContext, useMemo, useState } from 'react';
import CashModal from './CashModal';
import OrderModal from './OrderModal';
import PaymentModal from './PaymentModal';
import ConfirmModal, { ConfirmModalProps } from './ConfirmModal';

interface ModalMap {
  cash: React.FC<ConfirmModalProps>;
  confirm: React.FC<ConfirmModalProps>;
  payment: React.FC<ConfirmModalProps>;
  order: React.FC<ConfirmModalProps>;
  none: React.ExoticComponent<{
    children?: React.ReactNode;
  }>;
}
type ExtractProps<TComponentOrTProps> = TComponentOrTProps extends React.ComponentType<infer TProps>
  ? TProps
  : TComponentOrTProps;

type ModalType = keyof ModalMap;
type ModalComponent = ModalMap[ModalType];
interface ModalInfo {
  type: ModalType;
  props: ExtractProps<ModalComponent>;
}

interface Actions {
  closeModal: () => void;
  openModal: (modalInfo: ModalInfo) => () => void;
}

interface ModalContext {
  modalActions: Actions;
  modalMap: ModalMap;
  modalInfo: ModalInfo;
}

const ModalContext = createContext<ModalContext>(null!);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalInfo, setModalInfo] = useState<ModalInfo>({ type: 'none', props: {} });
  const modalMap = useMemo(() => {
    return {
      cash: CashModal,
      confirm: ConfirmModal,
      payment: PaymentModal,
      order: OrderModal,
      none: React.Fragment,
    };
  }, []);

  const modalActions = {
    closeModal: () => {
      setModalInfo({ type: 'none', props: {} });
    },
    openModal:
      ({ type, props }: ModalInfo) =>
      () => {
        setModalInfo({ type, props });
      },
  };

  return (
    <ModalContext.Provider value={{ modalInfo, modalMap, modalActions }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useChainingModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext does not exist in react tree');
  }

  return context;
};
