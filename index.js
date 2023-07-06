import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Notestate } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Notestate>
    <App />
    </Notestate>
  </React.StrictMode>
  </BrowserRouter>
);


