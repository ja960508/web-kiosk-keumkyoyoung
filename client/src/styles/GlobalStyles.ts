import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import {
  colorVariable,
  shadowVariable,
  borderRadiusVariable,
  fontSizeVariable,
  spaceVariable,
} from './variables';

const GlobalStyle = createGlobalStyle`
${reset}

:root{
    ${colorVariable}
    ${shadowVariable}
    ${borderRadiusVariable}
    ${fontSizeVariable}
    ${spaceVariable}
}
`;

export default GlobalStyle;
