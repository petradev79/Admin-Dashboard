import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { db, storage } from '../../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
  TextField,
  FormControl,
  LinearProgress,
  Box,
  Button,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
// import './login.scss';

type accountType = {
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  avatar: string | undefined;
  address: string;
  city: string;
};

const userInputs = [
  {
    id: 'firstName',
    label: 'First Name',
    type: 'text',
  },
  {
    id: 'lastName',
    label: 'Last Name',
    type: 'text',
  },
  {
    id: 'address',
    label: 'Address',
    type: 'text',
  },
  {
    id: 'city',
    label: 'City',
    type: 'text',
  },
  {
    id: 'username',
    label: 'Username',
    type: 'text',
  },
];

const Profile = () => {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const ref = useRef();
  const [file, setFile] = useState<FileList | null>(null);
  const [per, setPerc] = useState(null);
  const [account, setAccount] = useState<accountType>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    username: '',
    dateOfBirth: null,
    avatar: '',
  });
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const auth = useAuth();

  // useEffect(() => {
  //   setAccount({ ...account, avatar: file?.item.name });
  // }, [account]);

  // const handleSetImage = (e: React.FormEvent<HTMLInputElement>) => {
  //   if (file) {
  //     setFile(e.target.files)
  //   }

  //   // setFile(e.target);
  // };

  const profileHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      // await setDoc(doc(db, 'users', auth.user.uid), { ...account });
      // navigate('/');
    } catch {
      setError('Failed to sign up');
    }
    setLoading(false);
    console.log(account);
    console.log(file && file);
  };

  console.log(auth.user.uid);

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
    <div className='container flex-container-column'>
      {loading ? (
        <Box sx={{ width: '100%', marginBottom: 'auto' }}>
          <LinearProgress />
        </Box>
      ) : (
        <div className='base-component'>
          <h2>Profile settings</h2>
          <form
            style={{ display: 'flex', flexWrap: 'wrap', columnGap: '2rem' }}
            onSubmit={profileHandler}
          >
            {userInputs.map(input => (
              <FormControl
                margin='normal'
                key={input.id}
                style={{ minWidth: 'calc(50% - 1rem)' }}
              >
                <TextField
                  label={input.label}
                  type={input.type}
                  id={input.id}
                  // value={account[input.id as keyof typeof account]}
                  onChange={event =>
                    setAccount({
                      ...account,
                      [event.target.id]: event.target.value,
                    })
                  }
                />
              </FormControl>
            ))}

            <FormControl
              margin='normal'
              style={{ minWidth: 'calc(50% - 1rem)' }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label='Date of Birth'
                  orientation='portrait'
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
            {/* <div className='formInput'>
              <label htmlFor='file'>
                Image: <DriveFolderUploadOutlinedIcon className='icon' />
              </label>
              <input
                type='file'
                id='file'
                onChange={e => setFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </div> */}
            <input
              type='file'
              id='file'
              // value={file}
              onChange={e => setFile((e.target as HTMLInputElement).files)}
              style={{ display: 'none' }}
            />
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
              />
              <input type='file' hidden /> */}
              <TextField
                // accept='image/*'
                // label='Choose file'
                type='file'
                // id='avatar'
                // name='avatar'
                // value={account.avatar?.name || ''}
                // onChange={e => handleSetImage}
              />
            </FormControl>

            <FormControl margin='normal'>
              <Button type='submit' variant='contained' size='large'>
                Sign Up
              </Button>
            </FormControl>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
