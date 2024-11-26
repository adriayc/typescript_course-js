export type ProductsResponse = {
  data: Product[];
  meta: ProductsMeta;
};

export type Product = {
  id: number;
  attributes: {
    title: string;
    category: string;
    company: string;
    description: string;
    colors: string[];
    featured: boolean;
    image: string;
    price: string;
    shipping: boolean;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type ProductsMeta = {
  categories: string[];
  companies: string[];
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};
