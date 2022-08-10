import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Cart from '../../components/Cart';
import MenuGroup from '../../components/Menu';
import MenuTabs from '../../components/Menu/MenuTabs';
import MenuList from '../../components/Menu/MenuList';
import mixin from '../../styles/mixin';
import { Menu } from '../../types/server/menu';
import AnimatedComponent from '../../lib/animation/animationComponent';

interface MenuPageProps {
  menuItems: Menu[];
}

const MenuPage: FC<MenuPageProps> = ({ menuItems }) => {
  return (
    <>
      <AnimatedWrapper
        onEnter={[{ transform: 'translateX(100%)' }, {}]}
        onExit={[{ transform: 'translateX(100%)' }]}
      >
        <MenuGroup menuItems={menuItems}>
          <MenuTabs />
          <MenuList />
        </MenuGroup>
        <Cart />
      </AnimatedWrapper>
    </>
  );
};

export default MenuPage;

const AnimationSection = AnimatedComponent('section');
const AnimatedWrapper = styled(AnimationSection)`
  border-radius: calc(var(--screen-width) / (30));
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  position: relative;
  ${mixin.flexMixin({})}
  overflow-y: hidden;
  z-index: 30;
`;
const style = css``;
