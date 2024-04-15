<script setup>
    import Card from '../../components/Card.vue';
    import HeaderLogo from '../../components/HeaderLogo.vue';
    import OrderDetails from '../../components/OrderDetails.vue';
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const store = useStore();
    const orderDetails = computed(() => store.state.orderDetails);
    const handleToasted = (item) => {
        console.log("item",item);
        orderDetails.value.toasted = item;
        store.dispatch('storeData', orderDetails.value);
        setTimeout(() => {
            router.push({ name: 'veggiesVarientV2' });
        }, 100);
    };
</script>
<template>
    <section>
        <HeaderLogo/>
        <div class="container mx-auto py-10 px-5">
            <OrderDetails :orderDetails="orderDetails"/>
            <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div class="relative flex flex-col gap-3">
                    <Card class="bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]">
                        <div class="flex justify-center lobster-regular text-2xl  text-green-gradient" @click="handleToasted({id: 1 ,name: 'Toasted'})">
                            Toasted
                        </div>
                    </Card>
                    <Card class="bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]">
                        <div class="flex justify-center lobster-regular text-2xl text-green-gradient" @click="handleToasted({id: 2 ,name: 'Not Toasted'})">
                           Not Toasted
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>
