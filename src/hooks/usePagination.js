/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';

const usePagination = (totalPages) => {
  const pagesArray = [];
  return useMemo(() => {
    for (let index = 0; index < totalPages; index += 1) {
      pagesArray.push(index + 1);
    }
    return pagesArray;
  }, [totalPages]);
};

export default usePagination;
