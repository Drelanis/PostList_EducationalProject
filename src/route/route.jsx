import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

const routes = [
  { path: '/about', component: About },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: PostIdPage },
];

export default routes;
