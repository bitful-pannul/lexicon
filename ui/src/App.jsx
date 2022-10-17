import React, { useEffect, useState } from 'react'
import Urbit from '@urbit/http-api'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Space, MatchWord, Dictionary } from './components'
import { LexContextProvider, SpacesContextProvider } from './context';
import { theme, Box, OSViewPort } from '@holium/design-system'
import { ThemeProvider } from 'styled-components';

const api = new Urbit('', '', window.desk);
api.ship = window.ship;
window.urbit = api;


const App = () => {
  // typescript state types + poke returns might be useful
    const [status, setStatus] = useState("")

  // if served directly by ship, unnecessary. for dev purposes 
  const connect = async () => {
    window.urbit = await Urbit.authenticate({
     ship: "dev",
     url: "localhost:8080",
     code: "magsub-micsev-bacmug-moldex",
     verbose: true
   })
 }


  useEffect(() => {
    console.log('window :', window.urbit)
  }, [])


  return (
    <>
      {/* <ThemeProvider theme={theme.light}>
      <OSViewPort> */}
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
      {/* </OSViewPort>
      </ThemeProvider> */}
    </>
  );
}

export default App;

