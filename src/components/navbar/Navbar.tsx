import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import './navbar.scss';
import { Avatar } from '@mui/material';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__wrapper'>
        <div className='navbar__search'>
          <SearchOffOutlinedIcon />
          <input type='text' placeholder='Search...' />
        </div>
        <div className='navbar__items'>
          <div className='navbar__item'>
            <LanguageOutlinedIcon />
            <span className='navbar__item-text'>English</span>
          </div>
          <div className='navbar__item'>
            <DarkModeOutlinedIcon />
            <LightModeOutlinedIcon />
          </div>
          <div className='navbar__item'>
            <NotificationsNoneOutlinedIcon />
            <span className='navbar__item-count'>3</span>
          </div>
          <div className='navbar__item'>
            <GridViewOutlinedIcon />
          </div>
          <div className='navbar__item'>
            <Avatar
              alt='Remy'
              src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
              sx={{ width: 35, height: 35 }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
