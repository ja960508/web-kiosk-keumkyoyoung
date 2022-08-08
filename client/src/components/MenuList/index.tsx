import React, { FC } from 'react';
import styled from 'styled-components';
import mixin from '../../styles/mixin';
import MenuItem from './MenuItem';

// interface MenuListProps {}

const MenuList: FC = ({}) => {
  const arr = [1, 2, 3, 5, 5, 6, 6, 1, 3, 23, 2, 32, 3, 23, 23, 2, 32, 32, 3, 232, 3];
  return (
    <Wrapper>
      {arr.map((a, index) => (
        <MenuItem key={index} />
      ))}
    </Wrapper>
  );
};

export default MenuList;

const Wrapper = styled.ul`
  ${mixin.flexMixin({ wrap: 'wrap' })}
`;
