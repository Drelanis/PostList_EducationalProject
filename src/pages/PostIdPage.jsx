import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetching from '../hooks/useFetching';
import Loader from '../components/UI/loader/Loader';
import PostService from '../API/PostService';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isPostIdLoading, isPostIdError] = useFetching(
    async () => {
      const response = await PostService.getById(params.id);
      setPost(response.data);
    }
  );
  const [fetchCommentsById, isComLoading, isComError] = useFetching(
    async () => {
      const response = await PostService.getCommentsById(params.id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById();
    fetchCommentsById();
  }, []);

  return (
    <>
      {isPostIdLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ margin: 10 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostIdPage;
