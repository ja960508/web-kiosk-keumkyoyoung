import React, { useRef } from 'react';
import styled from 'styled-components';
import { RelativeContainer } from '../../styles/globalStyleComponent';
import mixin from '../../styles/mixin';
import { MenuItem as IMenuItem } from '../../types/server/menu';
import Modal from '../Modal';
import StatusDescription from './StatusDescription';

interface MenuItemProps {
  menuItemData: IMenuItem;
}

function MenuItem({ menuItemData }: MenuItemProps) {
  const { status, thumbnail, name, price } = menuItemData;
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <Wrapper>
        <MenuItemContainer ref={null}>
          <RelativeContainer>
            <img draggable="false" src={thumbnail} alt={name} />
            <StatusDescription status={status} />
          </RelativeContainer>
          <div>
            <MenuText>{name}</MenuText>
            <PriceText>{price.toLocaleString('kr')}</PriceText>
          </div>
        </MenuItemContainer>
      </Wrapper>
      <Modal />
    </>
  );
}

export default MenuItem;
const Wrapper = styled.li`
  width: 80%;
`;
const MenuItemContainer = styled.div`
  cursor: pointer;
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
