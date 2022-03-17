// import { Link } from 'react-router-dom';
import SidebarLink from './SidebarLink';
import { SvgIconProps } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './sidebar.scss';

export type SidebarLinkType = {
  title: string;
  path: string;
  Icon: SvgIconProps<'svg', {}>;
};

const sidebarLinks = [
  {
    groupTitle: 'MAIN',
    links: [
      {
        linkTitle: 'Dashboard',
        icon: <DashboardIcon />,
        linkPath: '',
      },
    ],
  },
  {
    groupTitle: 'LISTS',
    links: [
      {
        linkTitle: 'Users',
        icon: <PersonOutlineIcon />,
        linkPath: '/users',
      },
      {
        linkTitle: 'Products',
        icon: <StoreIcon />,
        linkPath: '/products',
      },
      {
        linkTitle: 'Orders',
        icon: <CreditCardIcon />,
        linkPath: '',
      },
      {
        linkTitle: 'Delivery',
        icon: <LocalShippingIcon />,
        linkPath: '',
      },
    ],
  },
  {
    groupTitle: 'USEFUL',
    links: [
      {
        linkTitle: 'Stats',
        icon: <InsertChartIcon />,
        linkPath: '',
      },
      {
        linkTitle: 'Notifications',
        icon: <NotificationsNoneIcon />,
        linkPath: '',
      },
    ],
  },
  {
    groupTitle: 'SERVICE',
    links: [
      {
        linkTitle: 'System Health',
        icon: <SettingsSystemDaydreamOutlinedIcon />,
        linkPath: '',
      },
      {
        linkTitle: 'Logs',
        icon: <PsychologyOutlinedIcon />,
        linkPath: '',
      },
      {
        linkTitle: 'Settings',
        icon: <SettingsApplicationsIcon />,
        linkPath: '',
      },
    ],
  },
  {
    groupTitle: 'USER',
    links: [
      {
        linkTitle: 'Profile',
        icon: <AccountCircleOutlinedIcon />,
        linkPath: '',
      },
      {
        linkTitle: 'Logout',
        icon: <ExitToAppIcon />,
        linkPath: '',
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__top'>
        <span className='sidebar__logo'>Admin Dashboard</span>
      </div>
      <div className='sidebar__center'>
        <ul>
          {sidebarLinks.map(group => (
            <div className='sidebar__group' key={group.groupTitle}>
              <p className='sidebar__title'>{group.groupTitle}</p>
              {group.links.map(link => (
                <SidebarLink
                  key={link.linkTitle}
                  title={link.linkTitle}
                  Icon={link.icon}
                  path={link.linkPath}
                />
              ))}
            </div>
          ))}
        </ul>
      </div>
      <div className='sidebar__bottom'>
        <div className='sidebar__option'></div>
        <div className='sidebar__option'></div>
      </div>
    </aside>
  );
};

export default Sidebar;
