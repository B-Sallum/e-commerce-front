const Register = () => {

  return (
    <div className='flex-center col margin1'>
      <div className='margin1'><h2>Register</h2></div>
      <form className='flex-center col'>
        <input required type='text'
          className='input'
          name='name' />
        <input required type='text'
          className='input'
          name='email' />
        <input required type='text'
          className='input'
          name='birthdate' />
        <input required type='password' 
          className='input'
          name='pass' />
        <input require type='password'
          className='input'
          name='passConfirm' />
        <button
          className='button1 margin1'>
          <h3>Submit</h3>
        </button>
      </form>
    </div>
  )
}

export default Register;
