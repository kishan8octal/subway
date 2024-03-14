import { createRouter, createWebHistory } from 'vue-router';
import HeroSection from '../pages/HeroSection.vue';
import TimeSection from '../pages/TimeSection.vue';
import CardSection from '../pages/CardSection.vue';
import CardDetails from "../pages/CardDetails.vue";

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
    },{
        path: '/card-details',
        name: 'cardDetails',
        component: CardDetails,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
