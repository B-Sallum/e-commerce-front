import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Register from './components/user/register';
import NavBar from './components/nav/nav';
import Login from './components/user/login';
import Product from './components/product/page';
import Profile from './components/user/profile';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/profile/" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
