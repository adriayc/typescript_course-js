import { NavLink } from 'react-router-dom';
import { AlignLeft } from 'lucide-react';
// Custom hooks (RTK)
import { useAppSelector } from '@/hooks';
// Utils
import { links } from '@/utils';
// Components (Shadcn/ui)
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';

function LinksDropdown() {
  const user = useAppSelector((state) => state.userState.user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only">Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {links.map((link) => {
          const restrictedRoutes =
            link.href === 'checkout' || link.href === 'orders';

          if (restrictedRoutes && !user) return null; // Restricted routes
          return (
            <DropdownMenuItem key={link.label}>
              <NavLink
                to={link.href}
                className={({ isActive }) => {
                  return `capitalize w-full ${isActive ? 'text-primary' : ''}`;
                }}
              >
                {link.label}
              </NavLink>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
