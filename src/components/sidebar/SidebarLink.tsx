import { NavLink } from 'react-router-dom';
import { SidebarLinkType } from './Sidebar';

const SidebarLink: React.FC<SidebarLinkType> = ({
  title,
  path,
  Icon,
  onClick,
}) => {
  return (
    <NavLink to={path} className={link => (link.isActive ? 'active' : '')}>
      <div className='sidebar-link' onClick={onClick}>
        {Icon}
        <span>{title}</span>
      </div>
    </NavLink>
  );
};

export default SidebarLink;
