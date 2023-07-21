import About from '../pages/About';
import Login from '../pages/Login';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

const privateRoutes = [
  { path: '/about', component: About },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: PostIdPage },
];

const publicRoutes = [{ path: '/login', component: Login }];

export { privateRoutes, publicRoutes };
