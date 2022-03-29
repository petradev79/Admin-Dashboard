import { useEffect, useState } from 'react';
import { SvgIconProps } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import variables from '../../styles/variables.module.scss';
import './widget.scss';

type WidgetType = {
  title: string;
  isMoney: boolean;
  link: string;
  icon: SvgIconProps<'svg', {}>;
};

let data: WidgetType;

const Widget: React.FC<{ type: string }> = ({ type }) => {
  const [isPositive, setIsPositive] = useState<boolean>(false);

  const amount = 100;
  const per = 20;

  if (type === 'user') {
    data = {
      title: 'users',
      isMoney: false,
      link: 'See all users',
      icon: (
        <PersonOutlineOutlinedIcon
          sx={{ fontSize: 35 }}
          style={{
            color: variables.colorMain,
            backgroundColor: variables.bgColorMain,
          }}
          className='widget__icon'
        />
      ),
    };
  }

  if (type === 'order') {
    data = {
      title: 'orders',
      isMoney: false,
      link: 'View all orders',
      icon: (
        <ShoppingCartOutlinedIcon
          sx={{ fontSize: 35 }}
          style={{
            color: variables.colorWarning,
            backgroundColor: variables.bgColorWarning,
          }}
          className='widget__icon'
        />
      ),
    };
  }

  if (type === 'earning') {
    data = {
      title: 'earnings',
      isMoney: true,
      link: 'View net earnings',
      icon: (
        <MonetizationOnOutlinedIcon
          sx={{ fontSize: 35 }}
          style={{
            color: variables.colorSuccess,
            backgroundColor: variables.bgColorSuccess,
          }}
          className='widget__icon'
        />
      ),
    };
  }

  if (type === 'balance') {
    data = {
      title: 'balance',
      isMoney: true,
      link: 'See details',
      icon: (
        <AccountBalanceWalletOutlinedIcon
          sx={{ fontSize: 35 }}
          style={{
            color: variables.colorDanger,
            backgroundColor: variables.bgColorDanger,
          }}
          className='widget__icon'
        />
      ),
    };
  }

  useEffect(() => {
    if (per > 0) {
      setIsPositive(true);
    } else {
      setIsPositive(false);
    }
  }, [per]);

  return (
    <div className='widget base-component'>
      <div className='widget__left'>
        <span className='widget__title'>{data.title}</span>
        <span className='widget__count'>
          {data.isMoney && '$'}
          {amount}
        </span>
        <span className='widget__link'>{data.link}</span>
      </div>
      <div className='widget__right'>
        {isPositive ? (
          <div className='widget__percentage widget__percentage--income'>
            <KeyboardArrowUpIcon />
            {per} %
          </div>
        ) : (
          <div className='widget__percentage widget__percentage--expenses'>
            <KeyboardArrowDownIcon />
            {per} %
          </div>
        )}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
