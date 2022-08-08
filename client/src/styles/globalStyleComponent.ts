import styled from 'styled-components';

export const FlexCenter = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Mockup = styled.div`
  background-color: black;
  height: var(--screen-height);
  width: var(--screen-width);
  border-width: calc(var(--screen-width) / 50);
  border-radius: calc(var(--screen-width) / (20));
  z-index: 100;
  box-shadow: 0 0.5em 2em 0.2em rgba(0, 0, 0, 0.33), 0 0 0 0.5px #000 inset;
`;
