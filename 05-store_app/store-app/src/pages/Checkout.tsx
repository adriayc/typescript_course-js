// Custom hooks (RTK)
import { useAppSelector } from '@/hooks';
// Store
import { type ReduxStore } from '@/store';
// Components
import { CartTotals, CheckoutForm, SectionTitle } from '@/components';
import { LoaderFunction } from 'react-router-dom';

// Loader
export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<null> => {
    console.log(store);
    return null;
  };

function Checkout() {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}

export default Checkout;
