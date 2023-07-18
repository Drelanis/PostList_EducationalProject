import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} index={index} post={post} key={post.id} />
      ))}
    </>
  );
};

export default PostList;
