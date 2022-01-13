import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [logged, setLogged] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    axios.get('/auth/myprofile', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then((response) => {
      setLogged(true);
      setUser(response.data);
    })
  }, [mounted]);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div className='flex-center col'>
      {
        logged ? (
          <>
            <img src={user.imageUrl} alt=''/>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.birthdate}</h2>
            <Link to={'/mylist'}>
              <button className='nav__buttons'>
                <h3>My Movies</h3>
              </button>
            </Link>
            <button onClick={logout} className='nav__buttons'>
                <h3>Logoff</h3>
            </button>
          </>
        ) : (
          <div>Please log in</div>
        )
      }
    </div>
  )
}

export default Profile;
