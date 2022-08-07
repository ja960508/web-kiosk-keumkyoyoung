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
  --unit: 1100px;
  background-color: green;
  height: calc(var(--unit) * 0.75);
  width: var(--unit);
  border-width: calc(var(--unit) / 50);
  border-radius: calc(var(--unit) / (20));
  z-index: 100;
`;
