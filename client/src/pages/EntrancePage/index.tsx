import React, { FC } from 'react';
import styled from 'styled-components';
import outImage from '../../assets/out.png';
import inImage from '../../assets/in.png';
import mixin from '../../styles/mixin';

const EntrancePage: FC = ({}) => {
  return (
    <Wrapper>
      <Title>우아한 카페</Title>
      <NavigationList>
        <a>
          <NavigationItem>
            <img src={inImage} alt="매장 내 식사" />
            <p>먹고 가요</p>
            <NavigationDescription>진정한 식사는 매장에서</NavigationDescription>
          </NavigationItem>
        </a>
        <a>
          <NavigationItem>
            <img src={outImage} alt="포장" />
            <p>포장 해요</p>
            <NavigationDescription>포장해도 맛집은 맛집</NavigationDescription>
          </NavigationItem>
        </a>
      </NavigationList>
    </Wrapper>
  );
};

export default EntrancePage;

const Wrapper = styled.section`
  ${mixin.flexMixin({ direction: 'column', align: 'center', justify: 'center' })}
  background-color: var(--primary-1);
  border-radius: calc(var(--screen-width) / (30));
  width: 100%;
  height: 100%;
  position: relative;
`;

const Title = styled.h1`
  color: var(--grey50);
  font-family: var(--display-font);
  font-size: var(--text-5xl);
`;

const NavigationItem = styled.div`
  ${mixin.flexMixin({ direction: 'column' })}
  cursor: pointer;
  width: 250px;
  height: 300px;
  position: relative;
  background-color: var(--grey50);
  border-radius: var(--rounded-xl);
  font-size: var(--text-3xl);
  font-family: var(--display-font);
  font-weight: 400;
  padding: var(--space-4) var(--space-4);
  box-shadow: var(--shadow-lg);

  img {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  margin-top: var(--space-12);
  gap: var(--space-8);
`;

const NavigationDescription = styled.div`
  font-family: var(--body-font);
  font-size: var(--text-md);
`;
