import React, { FC } from 'react';
import styled from 'styled-components';
import { useMenuData } from '.';
import MenuItem from './MenuItem';

const MenuList: FC = () => {
  const { selectedMenuItems } = useMenuData();
  return (
    <Wrapper>
      <MenuListWrapper>
        {selectedMenuItems &&
          selectedMenuItems.menuItem.map((item) => <MenuItem key={item.id} menuItemData={item} />)}
      </MenuListWrapper>
    </Wrapper>
  );
};

export default MenuList;

const MenuListWrapper = styled.ul`
  display: grid;
  min-width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: var(--space-5);
  column-gap: var(--space-6);
`;

const Wrapper = styled.div`
  overflow-y: hidden;
  width: 100%;
`;
