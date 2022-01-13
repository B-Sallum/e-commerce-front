import { Link, useNavigate } from 'react-router-dom';
import './nav.css'

const NavLogged = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div className='nav'>
      <div className='nav__home'>
        <Link to={'/'}>
          <button className='nav__buttons'>
            <h3>Home</h3>
          </button>
        </Link>
      </div>
      <div className='nav__user'>
        <Link to={'/profile/'}>
          <button className='nav__buttons'>
            <h3>Profile</h3>
          </button>
        </Link>
        <Link to={'/mylist'}>
          <button className='nav__buttons'>
            <h3>My Cart</h3>
          </button>
        </Link>
        <button onClick={logout} className='nav__buttons'>
            <h3>Logoff</h3>
        </button>
      </div>
    </div>
  )
}

export default NavLogged;
