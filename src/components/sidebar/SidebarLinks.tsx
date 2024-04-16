import { NavLink } from 'react-router-dom';
import { links } from './SidebarData';

export default function NavLinks() {
  const commonStyles =
    'flex h-10 grow items-center justify-center gap-2 rounded-md p-3 hover:bg-primary/5 md:flex-none md:justify-start md:p-2 md:px-3 text-base';
  const activeStyles = 'bg-primary/15';

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) => (isActive ? `${commonStyles} ${activeStyles}` : commonStyles)}
          >
            <LinkIcon className="w-5" />
            <p>{link.name}</p>
          </NavLink>
        );
      })}
    </>
  );
}
