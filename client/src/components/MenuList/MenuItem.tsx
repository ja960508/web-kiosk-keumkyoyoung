import React from 'react';
import styled from 'styled-components';
import { RelativeContainer } from '../../styles/globalStyleComponent';
import mixin from '../../styles/mixin';
import StatusDescription from './StatusDescription';

function MenuItem() {
  return (
    <>
      <Wrapper>
        <MenuItemContainer>
          <RelativeContainer>
            <img
              src="http://www.mmthcoffee.com/data/file/mm_new/thumb-1846184521_FvJity4O_379931970b3062dfc07284d9c27e7471b2e1aeae_216x216.png"
              alt="img"
            />
            <StatusDescription />
          </RelativeContainer>
          <div>
            <MenuText>카페 모카 금교영</MenuText>
            <PriceText>2,000</PriceText>
          </div>
        </MenuItemContainer>
      </Wrapper>
    </>
  );
}

export default MenuItem;
const Wrapper = styled.li`
  width: 30%;
`;
const MenuItemContainer = styled.div`
  background-color: white;
  flex-basis: 1/4;
  border-radius: 16px;
  ${mixin.flexMixin({ direction: 'column', align: 'center' })} p {
    text-align: center;
  }

  img {
    width: 100%;
  }
`;

const MenuText = styled.p`
  margin-top: var(--space-1);
  font-weight: 700;
`;

const PriceText = styled.p`
  font-weight: 500;
`;
