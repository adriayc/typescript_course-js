import { LoaderFunction } from 'react-router-dom';
// Utils
import { customFetch, type ProductsResponse } from '@/utils';
// Components
import { Filters, PaginationContainer, ProductsContainer } from '@/components';

const url = '/products';

// Loader
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url, {
    params: { search: 'chair' },
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
