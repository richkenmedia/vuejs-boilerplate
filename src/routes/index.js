import { createRouter, createWebHistory } from 'vue-router';
import frontendRoutes from './FrontendRoutes';
import backendRoutes from './BackendRoutes';

const routes = createRouter({
  routes: [
    ...frontendRoutes,
    ...backendRoutes,
  ],
  history: createWebHistory(),
});

export default routes;
