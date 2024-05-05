<script setup>
import HeaderLogo from '../components/HeaderLogo.vue';
import { cheeseVariants } from '../components/helper';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Card from '../components/Card.vue';

const router = useRouter();
const store = useStore();
const isLoading = ref(false);
const orderDetails = computed(() => store.state.orderDetails);
const showToastedDetails = (item) => {
    isLoading.value = true;
    orderDetails.value.categoryItems = item;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        isLoading.value = false;
        router.push({ name: orderDetails.value.food.id === 3 ? 'veggiesVarient' : 'toasted' });
    }, 100);
};
</script>
<template>
    <section>
        <HeaderLogo :isLoading="isLoading" />
        <div class="container mx-auto mt-24 py-10 px-5 mt-14">
            <div class="z-20 relative bottom-3 flex justify-center gap-3 lobster-regular text-center">
                <h1 class="text-black text-3xl">Cheese</h1>
                <span class="text-white text-3xl">
                    Select 1
                </span>
            </div>
            <div class="mt-[2rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in cheeseVariants" :key="index" @click="showToastedDetails(item)"
                    class="relative">
                    <Card class="bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]">
                        <div class="flex items-center gap-5">
                            <div v-if="item.image">
                                <img :src="item.image" alt="cheese variants"
                                    class="object-cover h-[100px] rounded-xl" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-black viga-regular font-thin text-xl">
                                    {{ item.name }}
                                </span>
                                <span class="text-gray-500 text-sm">
                                    {{ item.des }}
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>
