import { useLoaderData, useLocation } from 'react-router-dom';
// Utils
import {
  constructPrevOrNextUrl,
  constructUrl,
  ProductsResponseWithParams,
} from '@/utils';
// Components (Shadcn/ui)
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination';

function ComplexPaginationContainer() {
  const { meta } = useLoaderData() as ProductsResponseWithParams;
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();

  if (pageCount < 2) return null;

  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    pageCount,
    search,
    pathname,
  });

  const constructButton = ({
    pageNumber,
    isActive,
  }: {
    pageNumber: number;
    isActive: boolean;
  }) => {
    const url = constructUrl({ pageNumber, search, pathname });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };

  const constructEllipsis = (key: string): React.ReactNode => {
    return (
      <PaginationItem key={key}>
        <PaginationEllipsis />
      </PaginationItem>
    );
  };

  const renderPagination = () => {
    const pages: React.ReactNode[] = [];
    // First page
    pages.push(constructButton({ pageNumber: 1, isActive: page === 1 }));
    // Ellipsis
    if (page > 2) {
      pages.push(constructEllipsis('dots-1'));
    }
    // Active page
    if (page !== 1 && page !== pageCount) {
      pages.push(constructButton({ pageNumber: page, isActive: true }));
    }
    // Ellipsis
    if (page < pageCount - 1) {
      pages.push(constructEllipsis('dots-2'));
    }
    // Last page
    pages.push(
      constructButton({ pageNumber: pageCount, isActive: page === pageCount })
    );

    return pages;
  };

  return (
    <Pagination className="mt-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderPagination()}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default ComplexPaginationContainer;
