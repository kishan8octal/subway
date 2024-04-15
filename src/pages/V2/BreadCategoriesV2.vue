<script setup>
    import Card from '../../components/Card.vue';
    import HeaderLogo from '../../components/HeaderLogo.vue';
    import OrderDetails from '../../components/OrderDetails.vue';
    import { breedItemsForSalad, breedItemsForSandwitch } from '../../components/helper';
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const store = useStore();
    const orderDetails = computed(() => store.state.orderDetails);
    
    const selectedCategoryItems = orderDetails.value?.food?.id == 1
        ? breedItemsForSandwitch
        : breedItemsForSalad;
    
    const showCheeseDetailsData = (item) => {
        orderDetails.value.categoryItem = item;
        store.dispatch('storeData', orderDetails.value);
        setTimeout(() => {
            router.push({ name: 'cheeseV2' });
        }, 100);
    };
</script>
<template>
    <section>
        <HeaderLogo/>
        <div class="container mx-auto py-10 px-5">
            <OrderDetails :orderDetails="orderDetails"/>
            <div class="z-20 relative bottom-3 flex justify-center gap-3 lobster-regular text-center">
                <h1 class="ttext-black text-3xl">Bread</h1>
                <span class="text-white text-3xl">
                    Select 1
                </span>
            </div>
            <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div v-for="(item, index) in selectedCategoryItems" :key="index" @click="showCheeseDetailsData(item)" class="relative">
                    <Card class="bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]">
                        <div class="flex items-center gap-5">
                            <div>
                                <img :src="item.image" alt="categories" class="object-cover h-[100px] rounded-xl"/>
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-black viga-regular font-thin text-xl">
                                    {{item.name}}
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
