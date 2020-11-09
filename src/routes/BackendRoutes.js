import { IsAdmin } from '../middlewares/index';
import Dashboard from '../pages/Dashboard.vue';

export default [
  {
    path: '/',
    beforeEnter: IsAdmin, // restricted routes
    component: Dashboard,
  },
];
