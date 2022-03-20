import KeyboardArrowDownItem from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpItem from '@mui/icons-material/KeyboardArrowUp';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './featured.scss';

const Featured = () => {
  return (
    <div className='featured base-component'>
      <div className='featured__header'>
        <h2>Total Revenue</h2>
        <MoreVertOutlinedIcon fontSize='large' />
      </div>
      <div className='featured__body'>
        <div className='featured__progressbar'>
          <CircularProgressbar value={70} text={'70%'} />
        </div>
        <p className='featured__title'>Total sales made today</p>
        <p className='featured__amount'>$420</p>
        <p className='featured__desc'>
          Previus transactions processing. Last payments may not be included.
        </p>
        <div className='featured__footer'>
          <div className='footer-item'>
            <div className='footer-item__title'>Target</div>
            <div className='footer-item__result negative'>
              <KeyboardArrowDownItem fontSize='large' />
              <div className='footer-item__result-amount'>$12.4k</div>
            </div>
          </div>
          <div className='footer-item'>
            <div className='footer-item__title'>Last Week</div>
            <div className='footer-item__result positive'>
              <KeyboardArrowUpItem fontSize='large' />
              <div className='footer-item__result-amount'>$12.4k</div>
            </div>
          </div>
          <div className='footer-item'>
            <div className='footer-item__title'>Last Month</div>
            <div className='footer-item__result positive'>
              <KeyboardArrowUpItem fontSize='large' />
              <div className='footer-item__result-amount'>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
