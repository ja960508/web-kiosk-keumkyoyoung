import React, { useLayoutEffect } from 'react';
import { Route, Routes, ClientRouter } from './lib/router';
import { FlexCenter, Mockup } from './styles/globalStyleComponent';
import EntrancePage from './pages/EntrancePage';
import MenuPage from './pages/MenuPage';
import GlobalStyle from './styles/GlobalStyles';
import { initAxios } from './api';

function App() {
  useLayoutEffect(() => {
    initAxios();
  }, []);

  return (
    <>
      <GlobalStyle />
      <FlexCenter>
        <Mockup>
          <ClientRouter>
            <Routes>
              <Route path="/">
                <EntrancePage />
              </Route>
              <Route path="/menu">
                <MenuPage />
              </Route>
            </Routes>
          </ClientRouter>
        </Mockup>
      </FlexCenter>
    </>
  );
}

export default App;
