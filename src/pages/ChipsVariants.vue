<script setup>
import HeaderLogo from '../components/HeaderLogo.vue';
import OrderDetails from '../components/OrderDetails.vue';
import { chipsDetails } from '../components/helper';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Card from '../components/Card.vue';

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);
const isDetailsShow = ref(false);
const navigateToDrinkDetails = (item) => {
    orderDetails.value.chips = item;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        router.push({ name: 'drinkVarient' });
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
                class="relative mb-14 cursor-pointer py-3 px-[25px] rounded-lg  [border:none] w-full bg-[transparent] [background:linear-gradient(98.81deg,_#53e88b,_#15be77)]">
                <div @click="handleShowDetails()"
                    class="relative text-[1.2rem] font-semibold uppercase viga-regular text-white">
                    Show Selected Order Details
                </div>
            </button>
            <OrderDetails v-if="isDetailsShow" @close="closeDetails" :isDetailsShow="isDetailsShow" :orderDetails="orderDetails" />
            <div class="z-20 relative bottom-3 flex justify-center gap-3 lobster-regular text-center">
                <!-- <h1 class="text-black text-3xl">Chips</h1> -->
                <span class="text-white text-3xl">
                    Select your Chips 1
                </span>
            </div>
            <div class="mt-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div v-for="(item, index) in chipsDetails" :key="index" @click="navigateToDrinkDetails(item)"
                    class="relative">
                    <Card class="bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]">
                        <div class="flex items-center gap-5">
                            <div class="h-full w-[40%]" v-if="item.image">
                                <img :src="item.image" alt="cheese variants"
                                    class="object-cover h-[100px] rounded-xl" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-black viga-regular font-thin text-xl">
                                    {{ item.name }}
                                </span>
                                <span class="text-gray-500 text-sm">
                                    <p>
                                        {{ item.ounces }}
                                    </p>
                                    <p>
                                        {{ item.calories }}
                                    </p>

                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>
