import { createRouter, createWebHistory } from 'vue-router';
//for version ui 1
import Index from '../pages/index.vue';
import DeliveryTime from '../pages/DeliveryTime.vue';
import Foods from '../pages/Foods.vue';
import FoodCategories from '../pages/FoodCategories.vue';
import CategoryItems from '../pages/CategoryItems.vue';
import CategoryItem from '../pages/CategoryItem.vue';
import ToastedSection from '../pages/ToastedSection.vue';
import VeggiesSection from '../pages/VeggiesSection.vue';
import SaucesSection from '../pages/SaucesSection.vue';
import ChipsSection from '../pages/ChipsSection.vue';
import DrinkSection from '../pages/DrinkSection.vue';
// for version ui 2
import IndexV2 from '../pages/V2/indexV2.vue';
import DeliveryTimeV2 from '../pages/V2/DeliveryTimeV2.vue';
import IndexFoodV2 from '../pages/V2/indexFood.vue';

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
    }, {
        path: '/v2',
        name: 'indexV2',
        component: IndexV2,
    },
    {
        path: '/delivery-time/v2',
        name: 'deliveryTimeV2',
        component: DeliveryTimeV2,
    },
    {
        path: '/foodsV2',
        name: 'foodsV2',
        component: IndexFoodV2,
    },
    {
        path: '/delivery-time',
        name: 'deliveryTime',
        component: DeliveryTime,
    },
    {
        path: '/foods',
        name: 'foods',
        component: Foods,
    },
    {
        path: '/categories',
        name: 'foodCategories',
        component: FoodCategories,
    },
    {
        path: '/category-items',
        name: 'categoryItems',
        component: CategoryItems,
    },
    {
        path: '/salad-variants',
        name: 'categoryItemForSalad',
        component: CategoryItem,
    },
    {
        path: '/variants',
        name: 'categoryItem',
        component: CategoryItem,
    },
    {
        path: '/toasted',
        name: 'toastedSection',
        component: ToastedSection,
    },
    {
        path: '/salad-veggies',
        name: 'veggiesSectionForSalad',
        component: VeggiesSection,
    },
    {
        path: '/veggies',
        name: 'veggiesSection',
        component: VeggiesSection,
    },
    {
        path: '/sauces-veggies',
        name: 'saucesSection',
        component: SaucesSection,
    },
    {
        path: '/chips-sauce',
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
