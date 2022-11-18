import React, { useEffect } from 'react'
import Urbit from '@urbit/http-api'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Space, MatchWord, Dictionary } from './components'
import { LexContextProvider, SpacesContextProvider, useSpaceTheme } from './context';
import { theme, Box, OSViewPort, AppWindow } from '@holium/design-system'
import { ThemeProvider } from 'styled-components';

const api = new Urbit('', '', window.desk);
api.ship = window.ship;
window.urbit = api;


const App = () => {

  const { spaceTheme } = useSpaceTheme()

  useEffect(() => {
    console.log('current theme: ', spaceTheme)
  }, [])

  return (
    <>
      <ThemeProvider theme={spaceTheme}>
        <OSViewPort theme={spaceTheme} bg='primary'>
          <div className='ml-5 mt-5 space-y-4'>
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
          </div>
        </OSViewPort>
      </ThemeProvider>
    </>
  );
}

export default App;

