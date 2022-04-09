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

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
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
      await auth.login(email, password);
      setLoading(false);
      navigate('/');
    } catch {
      setError('Failed to log in');
      setLoading(false);
    }
  };

  return (
    <div className='login'>
      {loading ? (
        <Box sx={{ width: '100%', marginBottom: 'auto' }}>
          <LinearProgress />
        </Box>
      ) : (
        <div className='login__box base-component'>
          <h2 className='login__title'>Log In</h2>
          {error && !auth.user && <Alert severity='error'>{error}</Alert>}
          {auth.user && <Alert severity='success'>Already logged in</Alert>}
          <form onSubmit={loginHandler}>
            <FormControl margin='normal'>
              <TextField
                label='Email'
                type='email'
                name='email'
                id='email'
                value={email}
                helperText={focusedEmail && !email && 'this field is required'}
                onBlur={() => setFocusedEmail(true)}
                onChange={event => setEmail(event.target.value)}
                required
              />
            </FormControl>
            <FormControl margin='normal'>
              <TextField
                label='Password'
                type='password'
                name='password'
                id='password'
                value={password}
                helperText={
                  focusedPassword && !password && 'this field is required'
                }
                onBlur={() => setFocusedPassword(true)}
                onChange={event => setPassword(event.target.value)}
                required
              />
            </FormControl>

            <FormControl margin='normal'>
              <Button type='submit' variant='contained' size='large'>
                Log In
              </Button>
            </FormControl>
          </form>
          {!auth.user && (
            <div className='login__link'>
              Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
