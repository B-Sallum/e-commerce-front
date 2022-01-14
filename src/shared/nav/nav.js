import { Link } from 'react-router-dom';
import './nav.css'

const NavBar = () => {

  const logout = () => {
    localStorage.removeItem('token');
  }

  return (
    <>
      <div className='back'></div>
      <div className='nav'>
        <div className='nav__home'>
          <Link to={'/'}>
            <button className='nav__buttons'>
              <h3>Home</h3>
            </button>
          </Link>
        </div>
        <div className='nav__user'>
          <Link to={'/register'}>
            <button className='nav__buttons'>
              <h3>Register</h3>
            </button>
          </Link>
          <Link to={'/login'}>
            <button className='nav__buttons'>
              <h3>Login</h3>
            </button>
          </Link>
          <Link to={'/mycart'}>
            <button className='nav__buttons'>
              <h3>My Cart</h3>
            </button>
          </Link>
          <Link to={'/profile/'}>
            <button className='nav__buttons'>
              <h3>Profile</h3>
            </button>
          </Link>
          <button onClick={logout} className='nav__buttons'>
              <h3>Logoff</h3>
          </button>
        </div>
      </div>
    </>
  )
}

export default NavBar;
