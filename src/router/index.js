import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/index.vue';
import DeliveryTime from '../pages/DeliveryTime.vue';
import Food from '../pages/Foods.vue';
import FoodsCategories from '../pages/FoodsCategories.vue';
import BreadCategories from '../pages/BreadCategories.vue';
import CheeseVariants from '../pages/CheeseVariants.vue';
import ToastedVarient from '../pages/ToastedVariants.vue';
import VeggiesVarient from '../pages/VeggiesVarient.vue';
import SaucesVarient from '../pages/SaucesVariants.vue';
import ChipsVariants from '../pages/ChipsVariants.vue';
import DrinkVariant from '../pages/DrinkVariant.vue';
import CustomerDetails from '../pages/CustomerDetails.vue';
import ConfirmPayment from '../pages/ConfirmPayment.vue';


const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },
    {
        path: '/delivery-time',
        name: 'deliveryTime',
        component: DeliveryTime,
    },
    {
        path: '/foods',
        name: 'foods',
        component: Food,
    },
    {
        path: '/foodsCategories',
        name: 'foodsCategories',
        component: FoodsCategories,
    },
    {
        path: '/breadCategories',
        name: 'breadCategories',
        component: BreadCategories,
    },
    {
        path: '/cheese',
        name:'cheese',
        component: CheeseVariants
    },
    {
        path: '/toasted',
        name:'toasted',
        component: ToastedVarient
    },
    {
        path: '/veggies',
        name:'veggiesVarient',
        component: VeggiesVarient
    },
    {
        path: '/sauces',
        name:'saucesVarient',
        component: SaucesVarient
    },
    {
        path: '/chips',
        name:'chipsVarient',
        component: ChipsVariants
    },
    {
        path: '/drink',
        name:'drinkVarient',
        component: DrinkVariant
    },
    {
        path: '/customer-details',
        name:'customerDetails',
        component: CustomerDetails
    },
    {
        path: '/confirm-payment',
        name:'confirmPayment',
        component: ConfirmPayment
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
