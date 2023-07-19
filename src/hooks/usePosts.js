import { useMemo } from 'react';

const useSortedPosts = (posts, sort) => {
  return useMemo(() => {
    return sort
      ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
      : posts;
  }, [sort, posts]);
};

const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  return useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPosts]);
};

export default usePosts;
