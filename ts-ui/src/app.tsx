import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Space, Dictionary, Navigation, Word } from './components';
import useLexiconStore from './store/lexiconStore';


export function App() {
  const { init, loading } = useLexiconStore();

  useEffect(() => {

    init();
  }, []);

  return loading ? <div>~loading </div> : (
    <main className="">

      <Router>
        <Routes>
          <Route element={<Navigation /> }>
            <Route path='/apps/lexicon/:ship/:group/:word' element={<Word />} />
            <Route path='/apps/lexicon/:ship/:group' element={<Space />} />
            <Route path='/apps/lexicon/dict/:word' element={<Dictionary />} />
            <Route path='/apps/lexicon' element={<Home />} />
          </Route>
        </Routes>

      </Router>
    </main>
  );
}
