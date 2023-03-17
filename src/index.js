import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'utility/GlobalStyle';
import { theme } from 'utility/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="/rick-and-morty">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
