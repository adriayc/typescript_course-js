import { Form, Link, useLoaderData } from 'react-router-dom';
// Utils
import { ProductsResponseWithParams } from '@/utils';
// Component (Shadcn/ui)
import { Button } from './ui/button';
// Components
import FormInput from './FormInput';

function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search } = params;

  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type="search"
        name="search"
        label="Search Product"
        defaultValue={search}
      />
      <Button type="submit" size="sm" className="self-end mb-2">
        Search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2"
      >
        <Link to="/products">reset</Link>
      </Button>
    </Form>
  );
}

export default Filters;
