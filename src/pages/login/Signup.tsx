import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import {
  TextField,
  FormControl,
  LinearProgress,
  Box,
  Button,
  Alert,
} from '@mui/material';
import './login.scss';

type accountType = {
  id: string;
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  avatar: string;
  address?: string;
};

const Signup = () => {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  const [account, setAccount] = useState<accountType>({
    id: '',
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    avatar: '',
    address: '',
  });
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await auth.signup(account.email, account.password);
      navigate('/');
    } catch {
      setError('Failed to sign up');
    }
    setLoading(false);
  };

  const logoutHandler = () => {
    auth.signout();
  };

  console.log(auth.user);

  return (
    <div className='login'>
      {loading ? (
        <Box sx={{ width: '100%', marginBottom: 'auto' }}>
          <LinearProgress />
        </Box>
      ) : (
        <div className='login__box base-component'>
          <h2 onClick={logoutHandler} className='login__title'>
            Sign Up
          </h2>
          {error && !auth.user && <Alert severity='error'>{error}</Alert>}
          {auth.user && <Alert severity='success'>Already signup in</Alert>}
          <form onSubmit={loginHandler}>
            <FormControl margin='normal'>
              <TextField
                label='Email'
                type='email'
                name='email'
                id='email'
                value={account.email}
                helperText={
                  focusedEmail && !account.email && 'this field is required'
                }
                onBlur={() => setFocusedEmail(true)}
                onChange={event =>
                  setAccount({
                    ...account,
                    [event.target.name]: event.target.value,
                  })
                }
                required
              />
            </FormControl>
            <FormControl margin='normal'>
              <TextField
                label='Password'
                id='password'
                value={account.password}
                helperText={
                  focusedPassword &&
                  !account.password &&
                  'this field is required'
                }
                onBlur={() => setFocusedPassword(true)}
                onChange={event =>
                  setAccount({
                    ...account,
                    [event.target.name]: event.target.value,
                  })
                }
                required
              />
            </FormControl>
            <FormControl margin='normal'>
              <TextField
                label='Username'
                type='text'
                id='username'
                value={account.username}
                onChange={event =>
                  setAccount({
                    ...account,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl margin='normal'>
              <TextField
                label='First Name'
                type='text'
                id='firstName'
                value={account.firstName}
                onChange={event =>
                  setAccount({
                    ...account,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl margin='normal'>
              <TextField
                label='Last Name'
                type='text'
                id='lastName'
                value={account.lastName}
                onChange={event =>
                  setAccount({
                    ...account,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl margin='normal'>
              <TextField
                label='Date of avatar'
                type='text'
                id='avatar'
                value={account.avatar}
                onChange={event =>
                  setAccount({
                    ...account,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl margin='normal'>
              <TextField
                label='Date of Birth'
                type='text'
                id='dateOfBirth'
                value={account.dateOfBirth}
                onChange={event =>
                  setAccount({
                    ...account,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl margin='normal'>
              <TextField
                label='Date of Birth'
                type='text'
                id='dateOfBirth'
                value={account.dateOfBirth}
                onChange={event =>
                  setAccount({
                    ...account,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl margin='normal'>
              <Button type='submit' variant='contained' size='large'>
                Sign Up
              </Button>
            </FormControl>
          </form>
          {!auth.user && (
            <div className='login__link'>
              Need an account? <Link to='/login'>Log In</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Signup;
