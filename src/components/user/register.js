import axios from 'axios';
import { useState } from 'react';

const Register = () => {  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');

  const handleSubmit = async (event) => {

    event.preventDefault();

    const register = {
      name: name,
      email: email,
      birthdate: birthdate,
      pass: pass,
      passConfirm: passConfirm
    }

    await axios.post('user/register', register)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        alert(err);
      })
  }

  return (
    <div className='flex-center col margin1'>
      <div className='margin1'><h2>Register</h2></div>
      <form onSubmit={handleSubmit} className='flex-center col'>

        <input type='text' className='input' name='name' required
          onChange={event => setName(event.target.value)}
        />

        <input type='text' className='input' name='email' required
          onChange={event => setEmail(event.target.value)}
        />

        <input type='text' className='input' name='birthdate' required
          onChange={event => setBirthdate(event.target.value)}
        />

        <input type='password' className='input' name='pass' required
          onChange={event => setPass(event.target.value)}
        />

        <input type='password' className='input' name='passConfirm' required
          onChange={event => setPassConfirm(event.target.value)}
        />

        <button type='submit' className='button1 margin1'><h3>Submit</h3></button>
      </form>
    </div>
  )
}

export default Register;
