import { useState } from 'react';
import { useAuth } from '../../context/use-auth';
// import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from '../../firebase/firebase-config';
import './login.scss';

const Login = () => {
  // const [login, setLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [error, setError] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);
  // const navigate = useNavigate();
  const auth = useAuth();

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (error !== '') setError('');
    // setLogin(true);
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((cred) => {
    //     console.log(cred.user);
    //     // navigate('/');
    //     setEmail('');
    //     setPassword('');
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //   });
    auth.signin(email, password);
  };

  const logoutHandler = () => {
    // signOut(auth);
    auth.signout();
  };

  console.log(auth.user);

  return (
    <div className='login'>
      <h2 onClick={logoutHandler}>Log In</h2>
      <form onSubmit={loginHandler}>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          autoComplete='new-password'
          type='password'
          name='password'
          id='password'
          placeholder='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type='submit'>Log In</button>
      </form>
      {/* {error && <h1>{error}</h1>} */}
    </div>
  );
};

export default Login;
