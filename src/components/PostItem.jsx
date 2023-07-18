import MyButton from './UI/button/MyButton';

const PostItem = ({ post, index, remove }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {index + 1}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
