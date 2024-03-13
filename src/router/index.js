import { createRouter, createWebHistory } from 'vue-router';
import HeroSection from '../pages/HeroSection.vue';
import TimeSection from '../pages/TimeSection.vue';
import CardSection from '../pages/CardSection.vue';

const routes = [
    {
        path: '/',
        name: 'heroSection',
        component: HeroSection,
    },
    {
        path: '/time-section/:plan',
        name: 'timeSection',
        component: TimeSection,
    },
    {
        path: '/card-section',
        name: 'cardSection',
        component: CardSection,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
