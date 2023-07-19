import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} index={index} post={post} key={post.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default PostList;
