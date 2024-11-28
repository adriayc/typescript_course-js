import { LoaderFunction } from 'react-router-dom';
// Utils
import {
  customFetch,
  type ProductsResponse,
  type ProductsResponseWithParams,
} from '@/utils';
// Components
import {
  ComplexPaginationContainer,
  Filters,
  // PaginationContainer,
  ProductsContainer,
} from '@/components';

const url = '/products';

// Loader
export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  // Get query params
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(params);

  const response = await customFetch<ProductsResponse>(url, {
    params,
  });
  return { ...response.data, params };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      {/* <PaginationContainer /> */}
      <ComplexPaginationContainer />
    </>
  );
}

export default Products;
