import React, { FC } from 'react';
import styled from 'styled-components';
import Cart from '../../components/Cart';
import MenuHeader from '../../components/MenuHeader';
import MenuList from '../../components/MenuList';
import mixin from '../../styles/mixin';

// interface MenuPageProps {}

const MenuPage: FC = ({}) => {
  return (
    <>
      <Wrapper>
        <MenuWrapper>
          <MenuHeader />
          <MenuList />
        </MenuWrapper>
        <Cart />
      </Wrapper>
    </>
  );
};

export default MenuPage;

const Wrapper = styled.section`
  border-radius: calc(var(--screen-width) / (30));
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  ${mixin.flexMixin({})}
  overflow-y: hidden;
`;

const MenuWrapper = styled.div`
  ${mixin.flexMixin({ direction: 'column' })}
  overflow-x: hidden;
`;
