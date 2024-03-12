import { createRouter , createWebHistory } from "vue-router";
import HeroSection from '../pages/HeroSection.vue';
import TimeSection from "../pages/TimeSection.vue";
 
const routes = [
        {
            path: '/',
            name: 'heroSection',
            component: HeroSection,
        },
        {
          path: '/time-section/{id}',
          name: 'timeSection',
          component: TimeSection,
      },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
export default router