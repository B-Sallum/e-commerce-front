import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
