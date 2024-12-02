import { type LoaderFunction } from 'react-router-dom';
// Custom fetch (Axios)
import { customFetch, type ProductsResponse } from '@/utils';
// Components
import { FeaturedProducts, Hero } from '@/components';

const url = '/products?featured=true';

// Loader
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
