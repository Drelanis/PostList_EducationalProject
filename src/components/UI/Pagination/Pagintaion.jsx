import React from 'react';
import usePagination from '../../../hooks/usePagination';

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((number) => {
        return (
          <span
            onClick={() => changePage(number)}
            className={page === number ? 'page page__current' : 'page'}
            key={number}
          >
            {number}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
