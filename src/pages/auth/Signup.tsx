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
import './auth.scss';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await auth.signup(email, password);
      setLoading(false);
      navigate('/profile');
    } catch {
      setError('Failed to create an account');
      setLoading(false);
    }
  };

  return (
    <div className='auth'>
      {loading ? (
        <Box sx={{ width: '100%', marginBottom: 'auto' }}>
          <LinearProgress />
        </Box>
      ) : (
        <div className='auth__box base-component'>
          <h2 className='auth__title'>Sign Up</h2>
          {error && <Alert severity='error'>{error}</Alert>}
          <form onSubmit={signupHandler}>
            <FormControl margin='normal' fullWidth>
              <TextField
                label='Email'
                type='email'
                id='email'
                value={email}
                helperText={focusedEmail && !email && 'this field is required'}
                onBlur={() => setFocusedEmail(true)}
                onChange={event => setEmail(event.target.value)}
                required
              />
            </FormControl>
            <FormControl margin='normal' fullWidth>
              <TextField
                label='Password'
                type='password'
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
            <FormControl margin='normal' fullWidth>
              <TextField
                label='Confirm Password'
                type='password'
                id='passwordConfirm'
                value={passwordConfirm}
                onChange={event => setPasswordConfirm(event.target.value)}
                required
              />
            </FormControl>

            <FormControl margin='normal' fullWidth>
              <Button type='submit' variant='contained' size='large'>
                Sign Up
              </Button>
            </FormControl>
          </form>
          {!auth.user && (
            <div className='auth__link'>
              Already have an account? <Link to='/login'>Log In</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Signup;
