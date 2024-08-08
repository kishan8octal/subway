<script setup>
import HeaderLogo from '../components/HeaderLogo.vue';
import { saucesDetails } from '../components/helper';
import Button from '../components/Button.vue';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Card from '../components/Card.vue';

const router = useRouter();
const store = useStore();
const isLoading = ref(false)
const orderDetails = computed(() => store.state.orderDetails);

const souceArray =  ref(Array.from({ length: saucesDetails.length }, () => false));

const chipsDetails = () => {
    // isLoading.value = true;
    const selectedItem = saucesDetails.filter((item, index) => souceArray.value[index] === true);
    // saucesDetails
    orderDetails.value.sauces = selectedItem;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        isLoading.value = false;
        router.push({ name: orderDetails.value.food.id === 3 ? 'drinkVarient' : 'chipsVarient' });
    }, 100);
};
</script>
<template>
    <section>
        <HeaderLogo :isLoading="isLoading" />
        <div class="container mx-auto py-10 px-5 mt-24">
            <div class="z-20 relative bottom-3 flex justify-center gap-3 lobster-regular text-center">
                <span class="text-white text-3xl">
                    Select Your Sauces
                </span>
            </div>
            <div class="mt-[2rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in saucesDetails"
                     @click="souceArray[index] = !souceArray[index]"
                     :key="index" class="relative">
                    <Card class="bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]"
                    :class="souceArray[index] ? 'border border-red-600 ring-2 ring-red-600 ring-opacity-20' : ''">
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
            <div class="flex justify-center items-center">
                <Button @click="chipsDetails" variant="primary" class="mt-5 py-5 text-xl w-full max-w-2xl z-20">Next</button>
            </div>
        </div>
    </section>
</template>
