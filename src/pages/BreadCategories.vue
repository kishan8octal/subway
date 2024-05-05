<script setup>
import Card from '../components/Card.vue';
import HeaderLogo from '../components/HeaderLogo.vue';
import { breadItemsForFootLongSandwitch, breadItemsForSixInchSandwitch } from '../components/helper';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const isLoading = ref(false);
const orderDetails = computed(() => store.state.orderDetails);
const isDetailsShow = ref(false);
const selectedCategoryItems = orderDetails.value?.food?.id == 1
    ? breadItemsForSixInchSandwitch
    : breadItemsForFootLongSandwitch;

const showCheeseDetailsData = (item) => {
    isLoading.value = true;
    orderDetails.value.categoryItem = item;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        isLoading.value = false;
        router.push({ name: 'cheese' });
    }, 100);
};
</script>
<template>
    <section>
        <HeaderLogo :isLoading="isLoading" />
        <div class="container mx-auto py-10 px-5 mt-24">
            <div class="z-20 relative bottom-3 flex justify-center gap-3 lobster-regular text-center">
                <h1 class="ttext-black text-3xl">Bread</h1>
                <span class="text-white text-3xl">
                    Select 1
                </span>
            </div>
            <div class="mt-[2rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in selectedCategoryItems" :key="index" @click="showCheeseDetailsData(item)"
                    class="relative">
                    <Card class="bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]">
                        <div class="flex items-center gap-5">
                            <div>
                                <img :src="item.image" alt="categories" class="object-cover h-[100px] rounded-xl" />
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
