import Main from './pages/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import NavBar from './shared/nav/nav';
import Login from './components/login';
import Product from './pages/product';
import Profile from './pages/profile';
import Cart from './components/cart';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
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
