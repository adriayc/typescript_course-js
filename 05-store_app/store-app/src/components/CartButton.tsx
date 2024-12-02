import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
// Custom hook (RKT)
import { useAppSelector } from '@/hooks';
// Components (Shadcn/ui)
import { Button } from './ui/button';

function CartButton() {
  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link to="/cart">
        <ShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full w-6 h-6 flex justify-center items-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
