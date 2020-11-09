import { createApp } from 'vue';
import App from './App.vue';
import routes from './routes';

const vueApp = createApp(App);

vueApp.use(routes);

vueApp.mount('#app');
