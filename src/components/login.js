import api from '../utils/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = { email: user, pass: pass };

    api.post('/auth/login', login)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem('token', token);
      navigate('/');
    })
    .catch((err) => {
      alert(err)
    })
  }

  return (
    <div className='flex-center col margin1'>
      <div className='back'></div>
      <div className='margin1'><h2>Login</h2></div>
      <form className='flex-center col margin1'>
        <input type='text' className='input' name='user' required 
          onChange={(event) => setUser(event.target.value)}
          placeholder='E-mail...'
        />
        <input type='password' className='input' name='pass' required
          onChange={(event) => setPass(event.target.value)}
          placeholder='Password...'
        />
        <button onClick={handleSubmit} className='button1'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login;
