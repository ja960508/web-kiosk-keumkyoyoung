import React, { FC } from 'react';
import styled from 'styled-components';
import Cart from '../../components/Cart';
import MenuGroup from '../../components/Menu';
import MenuTabs from '../../components/Menu/MenuTabs';
import MenuList from '../../components/Menu/MenuList';
import mixin from '../../styles/mixin';
import { Menu } from '../../types/server/menu';

interface MenuPageProps {
  menuItems: Menu[];
}

const MenuPage: FC<MenuPageProps> = ({ menuItems }) => {
  return (
    <>
      <Wrapper>
        <MenuGroup menuItems={menuItems}>
          <MenuTabs />
          <MenuList />
        </MenuGroup>
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
