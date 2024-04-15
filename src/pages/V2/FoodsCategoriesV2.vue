<script setup>
    import HeaderLogo from '../../components/HeaderLogo.vue';
    import OrderDetails from '../../components/OrderDetails.vue';
    import Card from '../../components/Card.vue';
    import { selectedSaladItem, selectedSandwitchItem } from '../../components/helper';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { computed } from 'vue';

    const router = useRouter();
    const store = useStore();
    const orderDetails = computed(() => store.state.orderDetails);
    const selectedItemsData = orderDetails?.value?.food?.id == 3 ? selectedSaladItem : selectedSandwitchItem;

    const showBreadDetails = (category) => {
        orderDetails.value.foodCategory = category;
        store.dispatch('storeData', orderDetails.value);
        setTimeout(() => {
            router.push({ name: orderDetails?.value?.food?.id == 3 ? 'categoryItemForSalad' : 'breadCategoriesV2' });
        }, 100);
    };
</script>
<template>
    <section>
        <HeaderLogo/>
        <div class="container mx-auto py-10 px-5">
            <OrderDetails :orderDetails="orderDetails"/>
            <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div 
                        v-for="(item, index) in selectedItemsData" 
                        :key="index" @click="showBreadDetails(item)" class="relative">
                    <Card class="bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]">
                        <div class="flex items-center gap-5">
                            <div>
                                <img :src="item.image" alt="categories" 
                                     class="object-cover h-[100px] rounded-xl"/>
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-black viga-regular font-extrabold text-xl">
                                    {{item.name}}
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
