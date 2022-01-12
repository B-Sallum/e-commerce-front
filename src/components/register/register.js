import axios from 'axios';

const handleSubmit = async (event) => {
  event.preventDefault();

  axios.defaults.baseURL = 'http://localhost:3001/';

  const { name, email, birthdate, pass, passConfirm } = event.target;

  const cheese = {
    name: name.value,
    email: email.value,
    birthdate: birthdate.value,
    pass: pass.value,
    passConfirm: passConfirm.value
  }

  await axios.post('user/register', cheese)
  .then((res) => {
    return res;
  })
  .catch((err) => {
    alert(err);
  })
}

const Register = () => {

  return (
    <div className='flex-center col margin1'>
      <div className='margin1'><h2>Register</h2></div>
      <form onSubmit={handleSubmit} className='flex-center col'>

        <input type='text' className='input' name='name' required />

        <input type='text' className='input' name='email' required />

        <input type='text' className='input' name='birthdate' required />

        <input type='password' className='input' name='pass' required />

        <input type='password' className='input' name='passConfirm' required />

        <button type='submit' className='button1 margin1'><h3>Submit</h3></button>
      </form>
    </div>
  )
}

export default Register;
