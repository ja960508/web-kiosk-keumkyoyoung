import React from 'react';
import styled from 'styled-components';
import Modal from '..';
import AnimatedComponent from '../../../lib/animation/animationComponent';
import { Button } from '../../../styles/globalStyleComponent';
import mixin from '../../../styles/mixin';
import { MenuItem } from '../../../types/server/menu';
import { MinusIcon, PlusIcon } from '../../common/icons';
import useMenuOption from './useMenuOption';

interface MenuModalProps {
  toggleModal: () => void;
  menuItemData: MenuItem;
  sharedRef: React.RefObject<HTMLDivElement>;
}

function MenuModal({ toggleModal, menuItemData, sharedRef }: MenuModalProps) {
  const { thumbnail, name, price, option } = menuItemData;
  const { count, actions, selectedOptions } = useMenuOption(option);

  return (
    <Modal toggleModal={toggleModal}>
      <MenuModalContainer>
        <LeftWrapper>
          <MenuModalWrapper
            key={'modal'}
            animatedRef={sharedRef}
            keyframeOption={{ duration: 400 }}
          >
            <TitleText>옵션 선택</TitleText>
            <ProductWrapper>
              <ProductInfo>
                <img src={thumbnail} alt={name} />
                <Name>{name}</Name>
                <p>{(price * count).toLocaleString('kr')}원</p>
                <CounterWrapper>
                  <CounterIconButton onClick={actions.countDown}>
                    <MinusIcon />
                  </CounterIconButton>
                  <Count>{count}</Count>
                  <CounterIconButton onClick={actions.countUp}>
                    <PlusIcon />
                  </CounterIconButton>
                </CounterWrapper>
              </ProductInfo>
              <OptionList>
                {option.data.map((opt, optionIndex) => (
                  <li key={opt.name}>
                    <OptionTitle>{opt.name}</OptionTitle>
                    <OptionValues>
                      {opt.content.map((value, index) => (
                        <OptionValue
                          selected={value === selectedOptions[optionIndex]}
                          key={index}
                          onClick={actions.selectOption(optionIndex, value)}
                        >
                          {value}
                        </OptionValue>
                      ))}
                    </OptionValues>
                  </li>
                ))}
              </OptionList>
            </ProductWrapper>
            <BtnList>
              <CancelBtn onClick={toggleModal}>이전</CancelBtn>
              <ConfirmBtn>담기</ConfirmBtn>
            </BtnList>
          </MenuModalWrapper>
        </LeftWrapper>
      </MenuModalContainer>
    </Modal>
  );
}

export default MenuModal;

const animatedDiv = AnimatedComponent<HTMLDivElement>('div');

const MenuModalWrapper = styled(animatedDiv)`
  position: absolute;
  z-index: 3000;
  background-color: white;
  border-radius: var(--rounded-xl);
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  padding: var(--space-6);
`;

const MenuModalContainer = styled.div`
  width: var(--screen-width);
  height: var(--screen-height);
  background-color: transparent;
  border-radius: calc(var(--screen-width) / (20));
  position: relative;

  position: absolute;
`;

const LeftWrapper = styled.div`
  width: calc(100% - 240px);
  height: 100%;
  background-color: transparent;
  padding: var(--space-5);
  padding-right: 0px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnList = styled.div`
  ${mixin.flexMixin({})};
  justify-content: space-between;
`;

const ModalBtn = styled(Button)`
  width: 48%;
  color: white;
  --py: var(--space-3);
  border-radius: var(--rounded-md);
`;
const CancelBtn = styled(ModalBtn)`
  --bg-color: var(--selected);
`;
const ConfirmBtn = styled(ModalBtn)`
  --bg-color: var(--primary-1);
`;
const ProductWrapper = styled.div`
  display: flex;
  gpa: var(--space-6);
`;

const ProductInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: var(--space-2);
  align-items: center;
`;

const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`;

const TitleText = styled.p`
  font-size: var(--text-xl);
  text-align: center;
  font-weight: 600;
`;

const OptionTitle = styled.p`
  margin-bottom: var(--space-2);
  font-size: var(--text-lg);
  font-weight: 600;
`;

const OptionValues = styled.ul`
  gap: var(--space-4);
  display: flex;
`;

const OptionValue = styled.li<{ selected: boolean }>`
  border: 1px var(--grey300) solid;
  padding: var(--space-1) var(--space-3);
  font-size: var(text-md);
  border-radius: var(--rounded-lg);
  color: var(--grey500);
  cursor: pointer;
  ${({ selected }) => selected && 'background-color: var(--grey100); color: var(--grey800);'};
`;

const CounterWrapper = styled.div`
  ${mixin.flexMixin({ align: 'center' })}
  gap: var(--space-2);
`;

const CounterIconButton = styled(Button)`
  --px: var(--space-2);
  --py: var(--space-2);
  width: 24px;
  border-radius: 4px;
`;
const Name = styled.p`
  font-size: var(--text-lg);
  font-weight: 700;
`;
const Price = styled.p``;
const Count = styled.span`
  font-size: var(--text-md);
`;
function setState(arg0: number): [any, any] {
  throw new Error('Function not implemented.');
}
