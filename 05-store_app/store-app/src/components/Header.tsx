import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
// Custom hooks (RTK)
import { useAppDispatch, useAppSelector } from '@/hooks';
// Actions (RTK)
import { logoutUser } from '@/features/user/userSlice';
import { clearCart } from '@/features/cart/cartSlice';
// Components (Shadcn/ui)
import { Button } from './ui/button';

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const user = useAppSelector((state) => state.userState.user);

  const handleLogout = () => {
    // console.log('logout');
    dispatch(clearCart());
    dispatch(logoutUser());
    // Toast
    toast({ description: 'Logged Out' });
    // Navigate
    navigate('/');
  };

  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2">
        {/* User */}
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button variant="link" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center -mr-4">
            <Button asChild variant="link" size="sm">
              <Link to="/login">Sign in / Guest</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
