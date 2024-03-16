import { createRouter, createWebHistory } from 'vue-router';
import HeroSection from '../pages/HeroSection.vue';
import TimeSection from '../pages/TimeSection.vue';
import CardSection from '../pages/CardSection.vue';
import DetailsSection from '../pages/DetailsSection.vue';
import BreadSection from '../pages/BreadSection.vue';
import CheeseSection from '../pages/CheeseSection.vue';
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
    {
        path: '/card-details/:card',
        name: 'cardDetails',
        component: DetailsSection,
    },
    ,{
        path: '/card-details/:card/breadSection',
        name: 'breadSection',
        component: BreadSection,
    },
    ,{
        path: '/card-details/:card/breadSection/:id',
        name: 'cheeseSection',
        component: CheeseSection,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
