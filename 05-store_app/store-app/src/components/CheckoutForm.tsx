import { ActionFunction, Form, redirect } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
// Actions (RTK)
import { clearCart } from '@/features/cart/cartSlice';
// Store (RTK)
import { ReduxStore } from '@/store';
// Utils
import { Checkout, customFetch, formatAsDollars } from '@/utils';
// Components
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';

// Actions
export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    // Get data
    const name = formData.get('name') as string;
    const address = formData.get('address') as string;
    if (!name || !address) {
      toast({ description: 'Please fill out all fields' });
      return null;
    }
    // User
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: 'Please login to place to order' });
      return redirect('/login');
    }
    // Cart state
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    // Order info
    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const result = await customFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      console.log(result);
      // Dispatch
      store.dispatch(clearCart());
      // Toast
      toast({ description: 'Order placed' });
      //    Redirect
      return redirect('/orders');
    } catch (error) {
      console.log(error);
      // Toast
      toast({ description: 'Order failed' });
      return null;
    }
  };

function CheckoutForm() {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-4xl mb-4">Shipping Information</h4>
      {/* Inputs */}
      <FormInput type="text" name="name" label="first name" />
      <FormInput type="text" name="address" label="address" />
      {/* Button */}
      <SubmitBtn text="Place Your Order" className="mt-4" />
    </Form>
  );
}

export default CheckoutForm;
