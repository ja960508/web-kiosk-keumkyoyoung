import React from 'react';
import styled from 'styled-components';
import mixin from '../../styles/mixin';
import StatusDescription from './StatusDescription';

function MenuItem() {
  return (
    <>
      <Wrapper>
        <MenuItemContainer>
          <AbsoluteContainer>
            <img
              src="http://www.mmthcoffee.com/data/file/mm_new/thumb-1846184521_FvJity4O_379931970b3062dfc07284d9c27e7471b2e1aeae_216x216.png"
              alt="img"
            />
            <StatusDescription />
          </AbsoluteContainer>
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
  width: 25%;
`;
const MenuItemContainer = styled.div`
  background-color: white;
  flex-basis: 1/4;
  border-radius: 16px;
  ${mixin.flexMixin({ direction: 'column', align: 'center' })} p {
    text-align: center;
  }

  img {
    width: 160px;
  }
`;

const MenuText = styled.p`
  font-weight: 700;
`;

const PriceText = styled.p`
  font-weight: 500;
`;

const AbsoluteContainer = styled.div`
  position: relative;
`;
