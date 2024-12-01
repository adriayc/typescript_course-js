import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
// Store (RTK)
import { type ReduxStore } from '@/store';
// Utils
import { customFetch, type OrderResponse } from '@/utils';
// Components
import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
} from '@/components';

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
  const { meta } = useLoaderData() as OrderResponse;

  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order" />;
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
}

export default Orders;
