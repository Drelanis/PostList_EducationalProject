import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/app.css';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '2', body: '4' },
    { id: 2, title: '4', body: '3' },
    { id: 3, title: '3', body: '2' },
    { id: 4, title: '1', body: '1' },
  ]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((element) => element.id !== post.id));
  };

  const [selectedSort, setSelectedSort] = useState('');

  const sortPosts = (sortType) => {
    setSelectedSort(sortType);
    setPosts([...posts].sort((a, b) => a[sortType].localeCompare(b[sortType])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue={'Сортировка'}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      ></MySelect>
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={posts}
          title={'Статьи про JavaScript'}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  );
};

export default App;
