import React from 'react';
import { Route, Routes } from './lib/router';
import ClientRouter from './lib/router/Router';
import EntrancePage from './pages/EntrancePage';
import MenuPage from './pages/MenuPage';
import { FlexCenter, Mockup } from './styles/globalStyleComponent';
import GlobalStyle from './styles/GlobalStyles';

function App() {
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
