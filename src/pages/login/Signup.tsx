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
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import './login.scss';

type accountType = {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  avatar: string;
  address: string;
  city: string;
};

const Signup = () => {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const ref = useRef();
  const [account, setAccount] = useState<accountType>({
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    avatar: '',
    address: '',
    city: '',
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
      await auth.signup(account);
      navigate('/');
    } catch {
      setError('Failed to sign up');
    }
    setLoading(false);
  };

  console.log(auth.user);

  // const handleFileUpload = event => {
  //   const files = Array.from(event.target.files);
  //   const [file] = files;
  //   // setAccount(() =>
  //   setAccount({
  //     ...account,
  //     avatar: file,
  //   });
  //   // if (!!onChange) onChange({ target: { value: file } });
  // };

  return (
    <div className='login'>
      {loading ? (
        <Box sx={{ width: '100%', marginBottom: 'auto' }}>
          <LinearProgress />
        </Box>
      ) : (
        <div className='login__box base-component'>
          <h2 className='login__title'>Sign Up</h2>
          {error && !auth.user && <Alert severity='error'>{error}</Alert>}
          {auth.user && <Alert severity='success'>Already signup in</Alert>}
          <form onSubmit={loginHandler}>
            <FormControl margin='normal'>
              <TextField
                label='Email'
                type='email'
                id='email'
                name='email'
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
                name='password'
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
                name='username'
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
                name='firstName'
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
                name='lastName'
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  // sx={{ fontSize: 20 }}
                  // sx={{ fontSize: '1.6rem' }}
                  label='Date of Birth'
                  orientation='portrait'
                  // views={['year', 'month', 'day']}
                  value={account.dateOfBirth}
                  onChange={newValue =>
                    setAccount({
                      ...account,
                      dateOfBirth: newValue,
                    })
                  }
                  renderInput={params => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl margin='normal'>
              {/* <input
                ref={ref}
                type='file'
                accept='image/*'
                name='avatar'
                hidden
                onChange={event =>
                  setAccount({
                    ...account,
                    [event.target.name]: event.target.files[0],
                  })
                }
              /> */}
              <input type='file' hidden />
              <TextField
                label='Choose file'
                // type='file'
                // id='avatar'
                name='avatar'
                // value={account.avatar?.name || ''}
              />
            </FormControl>
            <FormControl margin='normal'>
              <TextField
                label='Address'
                type='text'
                id='address'
                name='address'
                value={account.address}
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
                label='City'
                type='text'
                id='city'
                name='city'
                value={account.city}
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
