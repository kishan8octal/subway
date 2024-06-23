<script setup>
    import { useRouter, onBeforeRouteUpdate } from 'vue-router';
    import { ChevronLeft } from "../components/Icons/Index";
    import OrderDetails from "../components/OrderDetails.vue";
    import { useStore } from "vuex";
    import { computed, ref, defineProps, onBeforeMount } from 'vue';

    const store = useStore();
    const orderDetails = computed(() => store.state.orderDetails);
    const router = useRouter();
    const isDetailsShow = ref(false);
    
    const props = defineProps({
        isBackButton:{
            type:Boolean,
            default: true
        },
        isShowOrderDetails:{
            type:Boolean,
            default: true
        },
        isLoading:{
            type:Boolean,
            default:false
        }
    });

    onBeforeMount(() => {
        window.scrollTo(0, 0);
    });

    const loadingData = ref(false)

    const handleBackPage = () => {
        loadingData.value = true;
        switch (router.currentRoute?.value?.name) {
            case 'deliveryTime':
                delete orderDetails.value?.branch;
                delete orderDetails.value?.customer;
                break;
            case 'foods':
                delete orderDetails.value.deliveryTime;
                break;
            case 'foodsCategories':
                delete orderDetails.value.food;
                break;
            case 'breadCategories':
                delete orderDetails.value.foodCategory;
                break;
            case 'cheese':
                delete orderDetails.value.categoryItem;
                break;
            case 'toasted':
                delete orderDetails.value.categoryItems;
                break;
            case 'veggiesVarient':
                delete orderDetails.value.toasted;
                break;
            case 'saucesVarient':
                delete orderDetails.value.veggies;
                break;
            case 'chipsVarient':
                delete orderDetails.value.sauces;
                delete orderDetails.value.requestBox;
                break;
            case 'drinkVarient':
                delete orderDetails.value.chips;
                break;
            case 'customerDetails':
                delete orderDetails.value.drink;
                break;
        };
        
        store.dispatch('storeData', orderDetails.value);
        setTimeout(() => {
            loadingData.value = false;
            router.back();
        }, 300);
    };
</script>
<template>
    <div v-if="isLoading || loadingData" class="h-screen fixed z-50 w-full flex items-center justify-center">
        <span class="loader"></span>
    </div>
    <div v-if="isBackButton" 
         @click="handleBackPage" 
         class="absolute top-5 left-5 z-20 mt-[-5px] bg-white 
         shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)] p-2 rounded-[10px]">
        <ChevronLeft 
                size="25"
        />
    </div>
    <div class="absolute z-20 top-16 w-full flex justify-center">
        <button
                v-if="isShowOrderDetails"
                class="cursor-pointer relative py-3 lobster-regular text-xl w-96 bg-white z-10 shadow-[0px_0px_50px_rgba(90,_110,_235,_0.3)]"
                @click="isDetailsShow = true">
            Show Selected Order Details
        </button>
    </div>
    <OrderDetails
            v-if="isDetailsShow"
            @close="isDetailsShow = false" 
            :isDetailsShow="isDetailsShow" 
            :orderDetails="orderDetails"
    />
    <div class="absolute top-0 w-full">
        <img 
                src="../assets/Vector 3.svg"
                class="z-0 rotate-180 w-full max-h-[60%] h-auto top-0"
        />
    </div>
    <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</template>
