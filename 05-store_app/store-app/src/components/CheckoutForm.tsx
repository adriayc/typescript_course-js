import { ActionFunction, Form } from 'react-router-dom';
// Store
import { ReduxStore } from '@/store';
// Components
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';

// Actions
export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    return null;
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
