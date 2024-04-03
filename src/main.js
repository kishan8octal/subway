import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue';
import './index.css';
import router from './router';
import Vuex from 'vuex';

const app = createApp(App);
app.use(router);
app.use(MotionPlugin);
app.use(Vuex)
app.mount('#app');
