import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dictionary from './components/Dictionary';
import Home from './components/Home';
import Space from './components/Space';
import Navigation from './components/styled/Navigation';
import Word from './components/Word';
import useLexiconStore from './store/lexiconStore';


export function App() {
  const { init, loading } = useLexiconStore();

  useEffect(() => {

    init();
  }, []);

  return loading ? <div>loading </div> : (
    <main className="">

      <Router>
        <Routes>
          <Route element={<Navigation />}>
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
