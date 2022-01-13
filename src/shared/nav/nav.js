import { Link } from 'react-router-dom';
import './nav.css'

const NavBar = () => {
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
      </div>
    </div>
  )
}

export default NavBar;
