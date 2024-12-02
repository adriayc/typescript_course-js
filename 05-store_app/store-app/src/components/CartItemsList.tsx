// Custom hook (RTK)
import { useAppSelector } from '@/hooks';
// Components (Shadcn/ui)
import { Card } from './ui/card';
// Components
import {
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  FourthColumn,
} from './CartItemColumns';

function CartItemsList() {
  const cartItems = useAppSelector((state) => state.cartState.cartItems);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const { cartID, title, price, image, amount, company, productColor } =
          cartItem;
        return (
          <Card
            key={cartID}
            className="flex flex-col gap-y4 sm:flex-row flex-wrap p-6 mb-8"
          >
            <FirstColumn image={image} title={title} />
            <SecondColumn
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdColumn amount={amount} cartID={cartID} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}

export default CartItemsList;
