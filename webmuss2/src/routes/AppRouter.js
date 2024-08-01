import Main from '../features/main';
import News from '../features/news';
import Login from '../features/user/login';
import Register from '../features/user/register';
const AppRouter = [
  { path: '/', component: Main },
  { path: '/News', component: News },
  { path: '/Login', component: Login, layout: null },
  { path: '/Register', component: Register, layout: null },
];

export default AppRouter;
