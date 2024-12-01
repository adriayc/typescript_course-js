import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
// Store (RTK)
import { type ReduxStore } from '@/store';
// Utils
import { customFetch, type OrderResponse } from '@/utils';

// Loader
export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrderResponse | Response | null> => {
    const user = store.getState().userState.user;
    if (!user) {
      // Toast
      toast({ description: 'Please login to continuer' });
      return redirect('/login');
    }
    // Get params
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await customFetch.get<OrderResponse>('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      return { ...response.data };
    } catch (error) {
      console.log(error);
      // Toast
      toast({ description: 'Failed to fetch orders' });
      return null;
    }
    return null;
  };

function Orders() {
  const { data, meta } = useLoaderData() as OrderResponse;
  console.log(data);

  return <h1 className="text-4xl">Orders Page</h1>;
}

export default Orders;
