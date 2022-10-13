import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from '@holium/design-system'
import { Urbit } from '@urbit/http-api'

const api = new Urbit('', 'magsub-micsev-bacmug-moldex', 'base');
api.ship = window.ship;
window.urbit = api;



const root = ReactDOM.createRoot(document.getElementById('root'));



api.connect().then(() => 
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.light}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
))



