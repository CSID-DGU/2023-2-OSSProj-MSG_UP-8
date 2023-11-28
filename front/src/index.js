import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './style/GlobalStyles';
import Modal from 'react-modal';
Modal.setAppElement('#root');
// import { ThemeProvider } from 'styled-components';
// import theme from './style/theme;'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);


