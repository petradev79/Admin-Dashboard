import { Link } from 'react-router-dom';
import { SidebarLinkType } from './Sidebar';

const SidebarLink: React.FC<SidebarLinkType> = ({ title, path, Icon }) => {
  return (
    <Link to={path}>
      <li className='sidebar-link'>
        {Icon}
        <span>{title}</span>
      </li>
    </Link>
  );
};

export default SidebarLink;
