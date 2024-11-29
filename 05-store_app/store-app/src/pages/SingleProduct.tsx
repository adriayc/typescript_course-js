import { type LoaderFunction } from 'react-router-dom';

// Loader
export const loader: LoaderFunction = async ({ params }) => {
  console.log(params);
  return null;
};

function SingleProduct() {
  return <h1 className="text-4xl">SingleProduct Page</h1>;
}

export default SingleProduct;
