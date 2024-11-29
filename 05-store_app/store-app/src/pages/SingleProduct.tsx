import { useState } from 'react';
import { useLoaderData, type LoaderFunction } from 'react-router-dom';
// Utils
import {
  customFetch,
  formatAsDollars,
  type SingleProductResponse,
} from '@/utils';

// Loader
export const loader: LoaderFunction = async ({
  params,
}): Promise<SingleProductResponse> => {
  // console.log(params);
  const response = await customFetch<SingleProductResponse>(
    `/products/${params.id}`
  );
  return { ...response.data };
};

function SingleProduct() {
  const { data: product } = useLoaderData() as SingleProductResponse;
  const { title, image, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatAsDollars(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const addTocart = () => {
    console.log('add to cart');
  };

  return <h1 className="text-4xl">SingleProduct Page</h1>;
}

export default SingleProduct;
