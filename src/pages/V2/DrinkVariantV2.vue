<script setup>
import HeaderLogo from '../../components/HeaderLogo.vue';
import OrderDetails from '../../components/OrderDetails.vue';
import { drinkDetails } from '../../components/helper';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import Card from '../../components/Card.vue';

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);

const navigateToDrinkDetails = (item) => {
    orderDetails.value.drink = item;
    store.dispatch('storeData', orderDetails.value);
    // setTimeout(() => {
    //     router.push({ name: 'drinkVariantsV2' });
    // }, 100);
};
</script>
<template>
    <section>
        <HeaderLogo />
        <div class="container mx-auto py-10 px-5">
            <OrderDetails :orderDetails="orderDetails" />
            <div class="z-20 relative bottom-3 flex justify-center gap-3 lobster-regular text-center">
                <!-- <h1 class="text-black text-3xl">Chips</h1> -->
                <span class="text-black text-3xl">
                    Select your Chips
                </span>
            </div>
            <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div v-for="(item, index) in drinkDetails" :key="index" @click="navigateToDrinkDetails(item)"
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
