import Main from '../features/main';
import News from '../features/news';
import DetailNew from '../features/news/detailnew/DetailNew';
import RankTable from '../features/rank/RankTable';
import Login from '../features/user/login';
import Register from '../features/user/register';
const AppRouter = [
  { path: '/', component: Main },
  { path: '/RankingTable', component: RankTable },
  { path: '/News', component: News },
  { path: 'DetailNew', component: DetailNew  },
  { path: '/Login', component: Login, layout: null },
  { path: '/Register', component: Register, layout: null },
];

export default AppRouter;
