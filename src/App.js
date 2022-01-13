import Main from './pages/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import NavBar from './shared/nav/nav';
import Login from './components/login';
import Product from './pages/product';
import Profile from './pages/profile';
import axios from 'axios';
import Cart from './components/cart';
import { useEffect, useState } from 'react';
import NavLogged from './shared/nav/navLogged';

axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const App = () => {

  const [nav, setNav] = useState(<NavBar />);

  useEffect(() => {
    axios.get('/auth/myprofile', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then(() => {
      setNav(<NavLogged />)
    })
    .catch(() => {
      setNav(<NavBar />)
    })
  }, [nav]);

  return (
    <BrowserRouter>
      {nav}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mycart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
