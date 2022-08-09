import React, { useLayoutEffect } from 'react';
import { Route, Routes, ClientRouter } from './lib/router';
import { FlexCenter, Mockup } from './styles/globalStyleComponent';
import EntrancePage from './pages/EntrancePage';
import MenuPage from './pages/MenuPage';
import GlobalStyle from './styles/GlobalStyles';
import { getMenu, initAxios } from './api';
import useQuery from './hooks/usequery';

function App() {
  useLayoutEffect(() => {
    initAxios();
  }, []);

  const { data } = useQuery(getMenu);

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
              <Route path="/menu">{data && <MenuPage menuItems={data} />}</Route>
            </Routes>
          </ClientRouter>
        </Mockup>
      </FlexCenter>
    </>
  );
}

export default App;
