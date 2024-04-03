import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/index.vue';
import DeliveryTime from '../pages/DeliveryTime.vue';
import Foods from '../pages/Foods.vue';
import FoodCategories from '../pages/FoodICategories.vue';
import CategoryItems from '../pages/CategoryItems.vue';
import CategoryItem from '../pages/CategoryItem.vue';
import ToastedSection from '../pages/ToastedSection.vue';
import VeggiesSection from '../pages/VeggiesSection.vue';
import SaucesSection from '../pages/SaucesSection.vue';
import ChipsSection from '../pages/ChipsSection.vue';
import DrinkSection from '../pages/DrinkSection.vue';
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
    },
    {
        path: '/sauces/:veggies',
        name: 'saucesSection',
        component: SaucesSection,
    },
    {
        path: '/chips/:sauce',
        name: 'chipsSection',
        component: ChipsSection,
    },
    {
        path: '/drink',
        name: 'drinkSection',
        component: DrinkSection,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
