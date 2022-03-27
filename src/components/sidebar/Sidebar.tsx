// import { Link } from 'react-router-dom';
import SidebarLink from './SidebarLink';
import { SvgIconProps } from '@mui/material';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
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
        linkTitle: 'Analytics',
        icon: <HomeWorkOutlinedIcon />,
        linkPath: '',
      },
      {
        linkTitle: 'Invoice',
        icon: <HomeWorkOutlinedIcon />,
        linkPath: '',
      },
    ],
  },
  {
    groupTitle: 'LISTS',
    links: [
      {
        linkTitle: 'Users',
        icon: <PersonOutlineOutlinedIcon />,
        linkPath: '/users',
      },
      {
        linkTitle: 'Products',
        icon: <StoreOutlinedIcon />,
        linkPath: '/products',
      },
      {
        linkTitle: 'Orders',
        icon: <CreditCardOutlinedIcon />,
        linkPath: '',
      },
      {
        linkTitle: 'Delivery',
        icon: <LocalShippingOutlinedIcon />,
        linkPath: '',
      },
    ],
  },
  {
    groupTitle: 'USEFUL',
    links: [
      {
        linkTitle: 'Stats',
        icon: <InsertChartOutlinedIcon />,
        linkPath: '',
      },
      {
        linkTitle: 'Notifications',
        icon: <NotificationsNoneOutlinedIcon />,
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
        icon: <SettingsApplicationsOutlinedIcon />,
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
        icon: <ExitToAppOutlinedIcon />,
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
      {/* <div className='sidebar__bottom'>
        <div className='sidebar__option'></div>
        <div className='sidebar__option'></div>
      </div> */}
    </aside>
  );
};

export default Sidebar;
