import React from 'react';
import styled from 'styled-components';
import { useCart } from '../../contexts/cartContext';
import mixin from '../../styles/mixin';
import CartMenuItem from './CartMenuItem';

const CartMenuList = () => {
  const { cart } = useCart();
  return (
    <Wrapper>
      {cart.map((cartItem, index) => (
        <CartMenuItem key={cartItem['optionHash']} cartItem={cartItem} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  ${mixin.flexMixin({ direction: 'column', align: 'center' })}
  margin-top: var(--space-3);
  padding: var(--space-4) var(--space-5);
  border-top: 1px solid var(--grey200);
  border-bottom: 1px solid var(--grey200);
  height: calc(var(--screen-height) * 0.6);
  overflow-y: hidden;
  row-gap: var(--space-4);
`;

export default CartMenuList;
