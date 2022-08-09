import React from 'react';
import styled from 'styled-components';
import mixin from '../../styles/mixin';
import { Button, RelativeContainer } from '../../styles/globalStyleComponent';
import { MinusIcon, PlusIcon, XIcon } from '../common/icons';

function CartMenuItem() {
  return (
    <>
      <li>
        <Wrapper>
          <RelativeContainer>
            <img
              src="http://www.mmthcoffee.com/data/file/mm_new/thumb-1846184521_FvJity4O_379931970b3062dfc07284d9c27e7471b2e1aeae_216x216.png"
              alt="img"
            />
            <SVGWrapper>
              <XIcon />
            </SVGWrapper>
          </RelativeContainer>
          <MenuDescription>
            <MenuName>아메리카노</MenuName>
            <MenuOption>tall, 얼음 많이</MenuOption>
            <MenuPrice>2000</MenuPrice>
          </MenuDescription>
          <CounterWrapper>
            <CounterIconButton>
              <MinusIcon />
            </CounterIconButton>
            <Count>1</Count>
            <CounterIconButton>
              <PlusIcon />
            </CounterIconButton>
          </CounterWrapper>
        </Wrapper>
      </li>
    </>
  );
}

export default CartMenuItem;

const Wrapper = styled.div`
  width: 100px;
  border-radius: 16px;

  &:first-child {
    margin-top: var(--space-3);
  }

  ${mixin.flexMixin({ direction: 'column', align: 'center' })} p {
    text-align: center;
  }

  img {
    background-color: white;
    width: 70px;
    border-radius: var(--rounded-md);
  }

  &:last-child {
    margin-top: var(--space-3);
  }
  font-size: var(--text-sm);
`;

const MenuDescription = styled.div`
  margin-top: var(--space-3);
  ${mixin.flexMixin({ direction: 'column', align: 'center', justify: 'center' })}
`;
const MenuPrice = styled.p`
  color: var(--grey600);
  font-size: var(--text-sm);
  margin-top: var(--space-1);
`;
const MenuName = styled.p`
  font-weight: 700;
`;

const SVGWrapper = styled.div`
  width: var(--space-5);
  height: var(--space-5);
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  cursor: pointer;

  svg {
    fill: var(--grey200);
    transition: all 0.3s ease-in-out;
  }

  svg:hover {
    fill: var(--grey300);
  }
`;

const MenuOption = styled.div`
  font-size: 8px;
`;
const CounterWrapper = styled.div`
  ${mixin.flexMixin({ align: 'center' })}
  gap: var(--space-2);
`;

const CounterIconButton = styled(Button)`
  --px: var(--space-1);
  --py: var(--space-1);
  width: 16px;
`;

const Count = styled.span`
  font-size: var(--text-xs);
`;
