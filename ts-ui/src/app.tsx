import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dictionary from './components/Dictionary';
import Space from './components/Space';
import Word from './components/Word';
import useLexiconStore from './store/lexiconStore';


export function App() {
  const { init, loading } = useLexiconStore();
  const lex = useLexiconStore(state => state.lex)

  useEffect(() => {

    init();
  }, []);

  return loading ? <div>loading </div> : (
    <main className="flex justify-start min-h-screen">
      <Router>
        <Routes>
          <Route path='/apps/lexicon/:ship/:group/:word' element={<Word /> } />
          <Route path='/apps/lexicon/:ship/:group' element={<Space />} />
          <Route path='/apps/lexicon/dict/:word' element={<Dictionary />} />
          <Route path='/apps/lexicon' element={<div>hey there</div>} />
        </Routes>

      </Router>
    </main>
  );
}
