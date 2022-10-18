import React from 'react'
import Urbit from '@urbit/http-api'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Space, MatchWord, Dictionary } from './components'
import { LexContextProvider, SpacesContextProvider } from './context';
import { theme, Box, OSViewPort, AppWindow } from '@holium/design-system'
import { ThemeProvider } from 'styled-components';

const api = new Urbit('', '', window.desk);
api.ship = window.ship;
window.urbit = api;


const App = () => {

  return (
    <>
      <ThemeProvider theme={theme.dark}> 
      <OSViewPort bg='primary' theme={theme.dark} >
      <SpacesContextProvider>
        <LexContextProvider>
          <Router>
            <Routes>
              <Route path='/apps/lexicon/:ship/:group/:word' element={<MatchWord />} />
              <Route path='/apps/lexicon/:ship/:group' element={<Space />} />
              <Route path='/apps/lexicon/dict/:word' element={<Dictionary />} />
              <Route exact path='/apps/lexicon' element={<Home />} />
            </Routes>
          </Router>
        </LexContextProvider>
      </SpacesContextProvider>
      </OSViewPort>
      </ThemeProvider>
    </>
  );
}

export default App;

