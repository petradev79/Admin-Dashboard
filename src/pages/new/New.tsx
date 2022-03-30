import { useState } from 'react';
import { transactionsCollectionRef } from '../../firebase/firebase-config';
import { addDoc } from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import './new.scss';

const New = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [amount, setAmount] = useState<number | null>(null);
  const [description, setDescription] = useState<string>('');
  const [type, setType] = useState<string>('');

  const addTransactionHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    const transaction = {
      address: `${address}, ${city}`,
      amount,
      date: new Date(),
      description,
      email,
      name,
      type,
      status: 'pending',
    };

    await addDoc(transactionsCollectionRef, transaction);
  };

  return (
    <div className='new container flex-container-column'>
      <h1>Add new transfer</h1>
      <div className='new__content'>
        <form onSubmit={addTransactionHandler} className='form base-component'>
          <div className='form__left'>
            <TextField
              className='form__field'
              label='Recipient Name'
              // color='secondary'
              // variant='outlined'
              // InputLabelProps={{ className: 'form__label' }}
              // InputLabelProps={{ style: { fontSize: '13px' } }}
              required
              onChange={event => setName(event.target.value)}
            />

            {/* <div className='form__group'>
              <label>Name</label>
              <input type='text' placeholder='John Doe' />
            </div> */}
            <div className='form__group'>
              <label>Email</label>
              <input
                type='email'
                placeholder='Email'
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className='form__group'>
              <label>Address</label>
              <input
                type='text'
                placeholder='Address'
                onChange={event => setAddress(event.target.value)}
              />
            </div>
            <div className='form__group'>
              <label>City</label>
              <input
                type='text'
                placeholder='City'
                onChange={event => setCity(event.target.value)}
              />
            </div>
            <div className='form__group'>
              <label>Amount</label>
              <input
                type='number'
                placeholder='add amount'
                onChange={event => setAmount(+event.target.value)}
              />
            </div>
          </div>
          <div className='form__right'>
            <div className='form__group'>
              <label>Description</label>
              <textarea
                name='description'
                id=''
                cols={30}
                rows={10}
                onChange={event => setDescription(event.target.value)}
              />
            </div>
            <div className='form__bottom'>
              <div className='form__group'>
                <select
                  name='type'
                  id='type'
                  onChange={event => setType(event.target.value)}
                >
                  <option value='income'>Income</option>
                  <option value='expense'>Expense</option>
                </select>
              </div>
              <button>Add Transfer</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;
