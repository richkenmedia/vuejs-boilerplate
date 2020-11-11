import { IsAuthenticated } from '../middlewares/index';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Signup from '../pages/Signup.vue';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    beforeEnter: IsAuthenticated, // restricted routes
    component: About,
  },
  {
    path: '/signup',
    component: Signup,
  },
];
