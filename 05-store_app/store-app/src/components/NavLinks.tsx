import { NavLink } from 'react-router-dom';
// Custom hooks (RTK)
import { useAppSelector } from '@/hooks';
// Utils
import { links } from '@/utils';

function NavLinks() {
  const user = useAppSelector((state) => state.userState.user);

  return (
    <div className="hidden lg:flex justify-end items-center gap-x-4">
      {links.map((link) => {
        const restrictedRoutes =
          link.href === 'checkout' || link.href === 'orders';

        if (restrictedRoutes && !user) return null; // Restricted routes
        return (
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) => {
              return `capitalize font-light tracking-wide ${
                isActive ? 'text-primary' : ''
              }`;
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
