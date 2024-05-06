import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import store from './store';
import('izitoast/dist/css/iziToast.min.css');

const app = createApp(App);
app.use(router);
app.use(store)
app.mount('#app');
