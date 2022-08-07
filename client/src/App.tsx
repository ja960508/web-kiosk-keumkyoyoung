import React from 'react';
import EntrancePage from './pages/EntrancePage';
import { FlexCenter, Mockup } from './styles/globalStyleComponent';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <FlexCenter>
        <Mockup>
          <EntrancePage />
        </Mockup>
      </FlexCenter>
    </>
  );
}

export default App;
