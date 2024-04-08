<script setup>
    import Button from '../components/Button.vue';
    import Card from '../components/Card.vue';
    import { useRouter } from 'vue-router';
    import sandwiches from '../assets/allSandWiches.avif';
    import saladImg from '../assets/salad.avif';
    import { useStore } from 'vuex';
    import { computed } from 'vue';

    const router = useRouter();
    const store = useStore();
    const orderDetails = computed(() => store.state.orderDetails);

    const cards = [
        {
            id: 1,
            name: 'classic sandwiches',
            dec: '6 Inch Sandwich + Chips + Soda =',
            price: '$10.00 with tax',
            image: sandwiches,
        },
        {
            id: 2,
            name: 'classic sandwiches',
            dec: 'Footlong Sandwich + Chips + Soda =',
            price: '$15.00 with tax',
            image: sandwiches,
        },
        {
            id: 3,
            name: 'salad',
            dec: 'Salad + water bottle =',
            price: '$10.00 with tax',
            image: saladImg,
        },
    ];
    const handleNavigate = (food) => {
        orderDetails.value.food = food;
        store.dispatch('storeData', orderDetails.value);
        setTimeout(() => {
            router.push({ name: 'foodCategories', });
        }, 100);
    };
</script>
<template>
    <section>
        <Button variant="primary" class="mt-5 my-10 mx-3 text-white font-bold" @click="router.back()">Back
        </Button>

        <div class="p-5 z-50">
            <div class="sm:max-w-7xl mx-auto p-5 sm:p-20">
                <Card>
                    <h1>Order Details</h1>
                    <div>Your branch :- {{orderDetails.branch.name }}</div>
                    <div> Your Delivery Time :- {{orderDetails.deliveryTime }}</div>
                </Card>
                <div class="mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-28 gap-x-10">
                    <div v-for="(card, index) in cards" :key="index" @click="handleNavigate(card)" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :variants="{ custom: { scale: 2 } }" :hovered="{ scale: 1.1 }" class="border bg-white border-green-600 cursor-pointer ring-2 ring-green-600 ring-opacity-20 relative rounded-md shadow-lg">
                        <div class="rounded-full mx-auto mt-[-80px] h-[200px] w-[200px]">
                            <img :src="card.image" alt="img" class="rounded-full mx-auto h-[180px] w-[180px] object-cover"/>
                        </div>
                        <div class="p-4 text-center rounded-lg">
                            <p class="text-2xl font-extrabold uppercase mt-5">
                                {{ card.name }} </p>
                            <p class="text-xl mt-5 font-extrabold text-green-600 ">{{ card.dec }}</p>
                            <span class="text-2xl font-extrabold text-black">{{card.price}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- </div> -->
    </section>
</template>
<style scoped>
    .drop-shadow-2xl {
        text-shadow: 1px 2px black;
    }
</style>
