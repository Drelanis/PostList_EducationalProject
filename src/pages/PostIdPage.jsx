import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetching from '../hooks/useFetching';
import Loader from '../components/UI/loader/Loader';
import PostService from '../API/PostService';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, isError] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
    </>
  );
};

export default PostIdPage;
