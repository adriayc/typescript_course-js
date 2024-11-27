import { LoaderFunction } from 'react-router-dom';
// Utils
import { customFetch, type ProductsResponse } from '@/utils';
// Components
import { Filters, PaginationContainer, ProductsContainer } from '@/components';

const url = '/products';

// Loader
export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponse> => {
  // console.log(request.url);
  // Get query params
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(params);

  const response = await customFetch<ProductsResponse>(url, {
    params,
  });
  return { ...response.data };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
