import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import {
  colorVariable,
  shadowVariable,
  borderRadiusVariable,
  fontSizeVariable,
  spaceVariable,
} from './variables';
import fontVariable from './variables/fontVariable';

const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'BMDOHYEON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css");

#root{
  height: 100%;
}

:root{
    ${colorVariable}
    ${shadowVariable}
    ${borderRadiusVariable}
    ${fontSizeVariable}
    ${spaceVariable}
    ${fontVariable}
}

html,body{
  height:100%;
  font-family: var(--body-font);
  color: var(--grey900);
}
`;

export default GlobalStyle;
