<script setup>
import HeaderLogo from '../components/HeaderLogo.vue';
import OrderDetails from '../components/OrderDetails.vue';
import Card from '../components/Card.vue';
import { selectedSaladItem, selectedSandwitchItem } from '../components/helper';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);
const selectedItemsData = orderDetails?.value?.food?.id == 3 ? selectedSaladItem : selectedSandwitchItem;
const isDetailsShow = ref(false);
const showBreadDetails = (category) => {
    orderDetails.value.foodCategory = category;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        router.push({ name: orderDetails?.value?.food?.id == 3 ? 'cheese' : 'breadCategories' });
    }, 100);
};
const handleShowDetails = () => {
    isDetailsShow.value = true
};
const closeDetails = () => {
    console.log("click");
  isDetailsShow.value = false; // Hide the order details overlay
};
</script>
<template>
    <section>
        <HeaderLogo />
        <div class="container mx-auto py-10 px-5 mt-14">
            <button
                class="relative cursor-pointer py-3 px-[25px] rounded-lg  [border:none] w-full bg-[transparent] [background:linear-gradient(98.81deg,_#53e88b,_#15be77)]">
                <div @click="handleShowDetails()"
                    class="relative text-[1.2rem] font-semibold uppercase viga-regular text-white">
                    Show Selected Order Details
                </div>
            </button>
            <OrderDetails v-if="isDetailsShow" :isDetailsShow="isDetailsShow" :orderDetails="orderDetails" @close="closeDetails" />
            <div class="mt-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div v-for="(item, index) in selectedItemsData" :key="index" @click="showBreadDetails(item)"
                    class="relative">
                    <Card class="bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]">
                        <div class="flex items-center gap-5">
                            <div>
                                <img :src="item.image" alt="categories" class="object-cover h-[100px] rounded-xl" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-black viga-regular font-extrabold text-xl">
                                    {{ item.name }}
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
