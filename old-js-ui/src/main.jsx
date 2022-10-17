import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from '@holium/design-system'
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.light}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app')
);

