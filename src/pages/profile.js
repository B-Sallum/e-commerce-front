import api from '../utils/api';
import { React, useState, useEffect } from "react";

const Profile = () => {

  const [user, setUser] = useState('');
  const [logged, setLogged] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    api.get('/auth/myprofile', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then((response) => {
      setLogged(true);
      setUser(response.data);
    })
  }, [mounted]);


  return (
    <div className='flex-center col'>
      {
        logged ? (
          <>
            <img src={user.imageUrl} alt=''/>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.birthdate}</h2>
          </>
        ) : (
          <div>Please log in</div>
        )
      }
    </div>
  )
}

export default Profile;
