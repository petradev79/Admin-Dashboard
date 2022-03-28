// import { useState } from 'react';
import './login.scss';

const Login = () => {
  // const [loginEmail, setLoginEmail] = useState('');
  // const [loginPassword, setLoginPassword] = useState('');

  // const handleLogin = (e: { preventDefoult: () => void; }) => {
  //   e.preventDefoult();
  //   login(loginEmail, loginPassword)

  // };

  return (
    <div className='Login'>
      <h3> Login </h3>
      {/* <input
        placeholder='Email...'
        onChange={event => {
          setLoginEmail(event.target.value);
        }}
      />
      <input
        placeholder='Password...'
        onChange={event => {
          setLoginPassword(event.target.value);
        }}
      /> */}

      {/* <button onSubmit={handleLogin}> Login</button> */}
    </div>
  );
};

export default Login;
