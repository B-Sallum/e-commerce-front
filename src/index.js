import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Register from './components/register/register';
import NavBar from './components/nav/nav';
import Login from './components/login/login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
