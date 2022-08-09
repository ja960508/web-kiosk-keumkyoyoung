import React, { FC } from 'react';
import styled from 'styled-components';
import mixin from '../../styles/mixin';
import MenuItem from './MenuItem';

// interface MenuListProps {}

const MenuList: FC = ({}) => {
  const arr = new Array(40).fill(0);
  return (
    <Wrapper>
      <MenuListWrapper>
        {arr.map((a, index) => (
          <MenuItem key={index} />
        ))}
      </MenuListWrapper>
    </Wrapper>
  );
};

export default MenuList;

const MenuListWrapper = styled.ul`
  ${mixin.flexMixin({ wrap: 'wrap' })}
  row-gap: var(--space-5);
`;

const Wrapper = styled.div`
  overflow-y: hidden;
`;
