import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Register from './pages/register/register';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
