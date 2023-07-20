import { useState } from 'react';

const useFetching = (callback) => {
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const fetching = async () => {
    try {
      setIsPostsLoading(true);
      await callback();
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsPostsLoading(false);
    }
  };

  return [fetching, isPostsLoading, isError];
};

export default useFetching;
