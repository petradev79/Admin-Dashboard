import { NavLink } from 'react-router-dom';
import { SidebarLinkType } from './Sidebar';

const SidebarLink: React.FC<SidebarLinkType> = ({ title, path, Icon }) => {
  return (
    <NavLink to={path} className={link => (link.isActive ? 'active' : '')}>
      <li className='sidebar-link'>
        {Icon}
        <span>{title}</span>
      </li>
    </NavLink>
  );
};

export default SidebarLink;
