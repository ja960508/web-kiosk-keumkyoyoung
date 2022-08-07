import React from 'react';
import { FlexCenter, Mockup } from './styles/globalStyleComponent';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <FlexCenter>
        <Mockup></Mockup>
      </FlexCenter>
    </>
  );
}

export default App;
