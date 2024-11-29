import { useState } from 'react';
import { Link, useLoaderData, type LoaderFunction } from 'react-router-dom';
// Utils
import {
  customFetch,
  formatAsDollars,
  type SingleProductResponse,
} from '@/utils';
// Components (Shadcn/ui)
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
// Components
import { SelectProductAmount, SelectProductColor } from '@/components';

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

  return (
    <section>
      <div className="flex gap-x-2 h-6 items-center">
        <Button asChild variant="link" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant="link" size="sm">
          <Link to="/products">Products</Link>
        </Button>
      </div>

      {/* Product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* Product Info */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-4 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8">{description}</p>
          {/* Colors */}
          <SelectProductColor
            colors={colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />
          {/* Amount */}
          <SelectProductAmount />
          {/* Cart Button */}
          <Button size="lg" className="mt-10" onClick={addTocart}>
            Add to bag
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
