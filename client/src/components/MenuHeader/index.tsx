import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../../styles/globalStyleComponent';
import mixin from '../../styles/mixin';

// interface MenuHeaderProps {
//   name?: string;
// }

const MenuHeader: FC = ({}) => {
  return (
    <>
      <Wrapper>
        <MenuList>
          <MenuBtnWrapper>
            <MenuBtn isActive style={{}}>
              커피
            </MenuBtn>
          </MenuBtnWrapper>
          <MenuBtnWrapper>
            <MenuBtn>커피</MenuBtn>
          </MenuBtnWrapper>
          <MenuBtnWrapper>
            <MenuBtn>커피</MenuBtn>
          </MenuBtnWrapper>
          <MenuBtnWrapper>
            <MenuBtn>커피</MenuBtn>
          </MenuBtnWrapper>
          <MenuBtnWrapper>
            <MenuBtn>커피</MenuBtn>
          </MenuBtnWrapper>
          <MenuBtnWrapper>
            <MenuBtn>커피</MenuBtn>
          </MenuBtnWrapper>
        </MenuList>
      </Wrapper>
    </>
  );
};

export default MenuHeader;

const Wrapper = styled.nav`
  padding: var(--space-5) var(--space-5);
  width: 100%;
`;

const MenuList = styled.ul`
  ${mixin.flexMixin({ wrap: 'wrap' })};
  column-gap: 29px;
  row-gap: var(--space-4);
  width: 100%;
`;

const MenuBtn = styled(Button)<{ isActive?: boolean }>`
  border-radius: var(--rounded-lg);

  ${mixin.flexMixin({ justify: 'center', align: 'center' })}
  ${({ isActive }) => isActive && '--bg-color: var(--primary-1); --text-color: white'};
  width: 100%;
`;

const MenuBtnWrapper = styled.li`
  --menu-btn-width: 130px;
  ${mixin.flexMixin({ align: 'center' })}
  width: var(--menu-btn-width);
`;
