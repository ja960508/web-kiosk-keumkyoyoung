import React, { FC } from 'react';
import styled from 'styled-components';
import CartMenuList from './CartMenuList';

// interface CartProps {
//   name?: string;
// }

const Cart: FC = ({}) => {
  return (
    <Wrapper>
      <p>장바구니</p>
      <p>먹고 가요</p>
      <p>가져가요</p>
      <CartMenuList />

      <div>
        <button>전체취소</button>
      </div>

      <div>
        <button>결제하기</button>
      </div>
      <p>몇 초 남음</p>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.article`
  position: absolute;
  bottom: top;
  right: 0;
  width: 240px;
  height: 100%;
  background-color: var(--grey50);
  border-radius: calc(var(--screen-width) / (30));
  border-top-right-radius: calc(var(--screen-width) / (30));
  border-bottom-right-radius: calc(var(--screen-width) / (30));
`;
