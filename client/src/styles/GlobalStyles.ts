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
html,body{
  height:100%
}

#root{
  height: 100%;
}
:root{
    ${colorVariable}
    ${shadowVariable}
    ${borderRadiusVariable}
    ${fontSizeVariable}
    ${spaceVariable}
}
`;

export default GlobalStyle;
