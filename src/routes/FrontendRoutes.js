import { IsAuthenticated, IsAdmin } from '../middlewares/index';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

export default [
  {
    path: '/',
    beforeEnter: IsAuthenticated, // restricted routes
    component: Home,
  },
  {
    path: '/about',
    beforeEnter: IsAdmin, // restricted routes
    component: About,
  },
];
