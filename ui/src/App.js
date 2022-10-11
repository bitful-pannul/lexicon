import React, { useEffect, useState } from 'react'
import Urbit from '@urbit/http-api'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Space } from './components'
import './App.css'
import TestWord from './components/TestWord';
import { LexContextProvider, SpacesContextProvider } from './context';
import { theme, Box, OSViewPort } from '@holium/design-system'
import { ThemeProvider } from 'styled-components';

const App = () => {
  // typescript state types + poke returns might be useful
  const [status, setStatus] = useState("")

  // if served directly by ship, unnecessary. for dev purposes 
  const connect = async () => {
    window.urbit = await Urbit.authenticate({
      ship: "lur",
      url: "localhost:8080",
      code: "sanmet-dospyx-wacteb-lavpex",
      verbose: true
    })
  }


  useEffect(() => {
    window.urbit = new Urbit("")
    window.urbit.ship = window.ship;
    window.urbit.onOpen = () => setStatus("con");
    window.urbit.onRetry = () => setStatus("try");
    window.urbit.onError = (err) => setStatus("err");

    console.log('window :', window.urbit)
    console.log('ubrit: ', Urbit)
    // commented out connect() for production build, if using locally, call connect() here
    connect()
  }, [])


  return (
    <>
      {/* <ThemeProvider theme={theme.light}>
      <OSViewPort> */}
      <SpacesContextProvider>
        <LexContextProvider>
          <Router>
            <Routes>
              <Route path='/apps/lexicon/:ship/:group/:word' element={<TestWord />} />
              <Route path='/apps/lexicon/:ship/:group' element={<Space />} />
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

