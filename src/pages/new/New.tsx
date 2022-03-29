import TextField from '@mui/material/TextField';
import './new.scss';

const New = () => {
  return (
    <div className='new container flex-container-column'>
      <h1>Add new transfer</h1>
      <div className='new__content'>
        <form className='form base-component'>
          <div className='form__left'>
            <TextField
              className='form__field'
              label='Recipient Name'
              // color='secondary'
              // variant='outlined'
              // InputLabelProps={{ className: 'form__label' }}
              // InputLabelProps={{ style: { fontSize: '13px' } }}
              required
            />

            <div className='form__group'>
              <label>Name</label>
              {/* <input type='text' placeholder='John Doe' /> */}
            </div>
            <div className='form__group'>
              <label>Email</label>
              <input type='email' placeholder='Email' />
            </div>
            <div className='form__group'>
              <label>Address</label>
              <input type='text' placeholder='Address' />
            </div>
            <div className='form__group'>
              <label>City</label>
              <input type='text' placeholder='City' />
            </div>
            <div className='form__group'>
              <label>Amount</label>
              <input type='number' placeholder='add amount' />
            </div>
          </div>
          <div className='form__right'>
            <div className='form__group'>
              <label>Description</label>
              <textarea name='description' id='' cols={30} rows={10}></textarea>
            </div>
            <div className='form__bottom'>
              <div className='form__group'>
                <select name='type' id='type'>
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
