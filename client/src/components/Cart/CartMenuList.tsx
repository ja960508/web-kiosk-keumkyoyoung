import React from 'react';
import styled from 'styled-components';
import mixin from '../../styles/mixin';
import CartMenuItem from './CartMenuItem';

const CartMenuList = () => {
  const arr = new Array(20).fill(0);
  return (
    <Wrapper>
      {arr.map((r, index) => (
        <CartMenuItem key={index} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  ${mixin.flexMixin({ direction: 'column', align: 'center' })}
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: calc(var(--screen-height) * 0.6);
  overflow-y: hidden;
`;

export default CartMenuList;
