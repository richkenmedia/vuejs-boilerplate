import { createRouter, createWebHistory } from 'vue-router';
import frontendRoutes from './FrontendRoutes';
import backendRoutes from './BackendRoutes';

const router = createRouter({
  routes: [
    ...frontendRoutes,
    ...backendRoutes,
  ],
  history: createWebHistory(),
});

export default router;
