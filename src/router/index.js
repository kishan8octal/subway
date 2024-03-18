import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/index.vue';
import DeliveryTime from '../pages/DeliveryTime.vue';
import Foods from '../pages/Foods.vue';
import FoodCategories from '../pages/FoodICategories.vue';
import CategoryItems from '../pages/CategoryItems.vue';
import CategoryItem from '../pages/CategoryItem.vue';
import ToastedSection from '../pages/ToastedSection.vue';
import VeggiesSection from '../pages/VeggiesSection.vue'
const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },
    {
        path: '/delivery-time/:plan',
        name: 'deliveryTime',
        component: DeliveryTime,
    },
    {
        path: '/foods/:time',
        name: 'foods',
        component: Foods,
    },
    {
        path: '/food-categories/:category',
        name: 'foodCategories',
        component: FoodCategories,
    },
    {
        path: '/food-categories/:category/items',
        name: 'categoryItems',
        component: CategoryItems,
    },
    {
        path: '/food-categories/:category/items/:id',
        name: 'categoryItem',
        component: CategoryItem,
    },
    {
        path: '/food-categories/:category/items/:id/toasted-section',
        name: 'toastedSection',
        component: ToastedSection,
    },
    {
        path: '/veggies-section',
        name: 'veggiesSection',
        component: VeggiesSection,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
