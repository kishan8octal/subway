import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/index.vue';
import DeliveryTime from '../pages/DeliveryTime.vue';
import Foods from '../pages/Foods.vue';
import FoodCategories from '../pages/FoodICategories.vue';
import CategoryItems from '../pages/CategoryItems.vue';
import CategoryItem from '../pages/CategoryItem.vue';
import ToastedSection from '../pages/ToastedSection.vue';
import VeggiesSection from '../pages/VeggiesSection.vue';
const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },
    {
        path: '/branch/:branch/delivery-time',
        name: 'deliveryTime',
        component: DeliveryTime,
    },
    {
        path: '/branch/:branch/delivery-time/:time/foods',
        name: 'foods',
        component: Foods,
    },
    {
        path: '/branch/:branch/delivery-time/:time/foods/:food/categories',
        name: 'foodCategories',
        component: FoodCategories,
    },
    {
        path: '/branch/:branch/delivery-time/:time/foods/:food/categories/:category/category-items',
        name: 'categoryItems',
        component: CategoryItems,
    },
    {
        path: '/branch/:branch/delivery-time/:time/foods/:food/categories/:category/variants',
        name: 'categoryItemForSalad',
        component: CategoryItem,
    },
    {
        path: '/branch/:branch/delivery-time/:time/foods/:food/categories/:category/category-items/:item/variants',
        name: 'categoryItem',
        component: CategoryItem,
    },
    {
        path: '/branch/:branch/delivery-time/:time/foods/:food/categories/:category/category-items/:item/variants/:variant/toasted',
        name: 'toastedSection',
        component: ToastedSection,
    },
    {
        path: '/branch/:branch/delivery-time/:time/foods/:food/categories/:category/variants/:variant/veggies',
        name: 'veggiesSectionForSalad',
        component: VeggiesSection,
    },
    {
        path: '/branch/:branch/delivery-time/:time/foods/:food/categories/:category/category-items/:item/variants/:variant/toasted/:toast/veggies',
        name: 'veggiesSection',
        component: VeggiesSection,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
