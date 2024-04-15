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
import FoodV2 from '../pages/V2/FoodsV2.vue';
import FoodsCategoriesV2 from '../pages/V2/FoodsCategoriesV2.vue';
import BreadCategoriesV2 from '../pages/V2/BreadCategoriesV2.vue';
import CheeseVariantsV2 from '../pages/V2/CheeseVariantsV2.vue';
import ToastedVarientV2 from '../pages/V2/ToastedVariantsV2.vue';
import VeggiesVarientV2 from '../pages/V2/VeggiesVarientV2.vue';
import SaucesVarientV2 from '../pages/V2/SaucesVariantsV2.vue';
import ChipsVariantsV2 from '../pages/V2/ChipsVariantsV2.vue';
import DrinkVariantV2 from '../pages/V2/DrinkVariantV2.vue';

const routes = [
    {
        path: '/',
        name: 'indexV2',
        component: IndexV2,
    },
    {
        path: '/delivery-time',
        name: 'deliveryTimeV2',
        component: DeliveryTimeV2,
    },
    {
        path: '/foodsV2',
        name: 'foodsV2',
        component: FoodV2,
    },
    {
        path: '/foodsCategoriesV2',
        name: 'foodsCategoriesV2',
        component: FoodsCategoriesV2,
    },
    {
        path: '/breadCategoriesV2',
        name: 'breadCategoriesV2',
        component: BreadCategoriesV2,
    },
    {
        path: '/cheeseV2',
        name:'cheeseV2',
        component: CheeseVariantsV2
    },
    {
        path: '/toastedV2',
        name:'toastedV2',
        component: ToastedVarientV2
    },
    {
        path: '/veggiesV2',
        name:'veggiesVarientV2',
        component: VeggiesVarientV2
    },
    {
        path: '/saucesV2',
        name:'saucesVarientV2',
        component: SaucesVarientV2
    },
    {
        path: '/chipsV2',
        name:'chipsVarientV2',
        component: ChipsVariantsV2
    },
    {
        path: '/drinkV2',
        name:'drinkVarientV2',
        component: DrinkVariantV2
    },
    // {
    //     path: '/category-items',
    //     name: 'categoryItems',
    //     component: CategoryItems,
    // },
    // {
    //     path: '/salad-variants',
    //     name: 'categoryItemForSalad',
    //     component: CategoryItem,
    // },
    // {
    //     path: '/variants',
    //     name: 'categoryItem',
    //     component: CategoryItem,
    // },
    // {
    //     path: '/toasted',
    //     name: 'toastedSection',
    //     component: ToastedSection,
    // },
    // {
    //     path: '/salad-veggies',
    //     name: 'veggiesSectionForSalad',
    //     component: VeggiesSection,
    // },
    // {
    //     path: '/veggies',
    //     name: 'veggiesSection',
    //     component: VeggiesSection,
    // },
    // {
    //     path: '/sauces-veggies',
    //     name: 'saucesSection',
    //     component: SaucesSection,
    // },
    // {
    //     path: '/chips-sauce',
    //     name: 'chipsSection',
    //     component: ChipsSection,
    // },
    // {
    //     path: '/drink',
    //     name: 'drinkSection',
    //     component: DrinkSection,
    // }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
