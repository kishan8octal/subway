<script setup>
    import Button from '../components/Button.vue';
    import Card from '../components/Card.vue';
    import { useRouter, useRoute } from 'vue-router';
    import sandwiches from "../assets/allSandWiches.avif"
    import saladImg from "../assets/salad.avif"

    const router = useRouter();
    const { params } = useRoute();
    
    const cards = [
        {
            id: 1,
            name: 'classic sandwiches',
            dec: '6 Inch Sandwich + Chips + Soda = $10.00 with tax',
            image: sandwiches
        },
        {
            id: 2,
            name: 'classic sandwiches',
            dec: 'Footlong Sandwich + Chips + Soda = $15.00 with tax',
            image: sandwiches
        },
        { id: 3, name: 'salad', dec: 'Salad + water bottle = $10.00 with tax',image: saladImg },
    ];
    const handleNavigate = (id) => {
        router.push({
            name: 'foodCategories',
            params: {
                branch:params.branch,
                time:params.time,
                food: id,
            },
        });
    };
</script>
<template>
    <section>
        <Button variant="primary" class="mt-5 my-10 mx-3 text-white font-bold" @click="router.back()">Back</Button>
        <div class="h-screen p-5 z-50">
            <div class="sm:max-w-7xl mx-auto p-5 sm:p-20">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-48 sm:gap-10">
                    <div
                            v-motion
                            :initial="{ opacity: 0, y: 100 }"
                            :enter="{ opacity: 1, y: 0, scale: 1 }"
                            :variants="{ custom: { scale: 2 } }"
                            :hovered="{ scale: 1.1 }"
                            v-for="(card,index) in cards" 
                            :key="index" 
                            @click="handleNavigate(card.id)"
                            class="border bg-white border-green-600 cursor-pointer shadow-md ring-2 ring-green-600 
                            ring-opacity-20 relative rounded-md shadow-lg">
                        <div class="rounded-full mx-auto mt-[-80px] h-[200px] w-[200px]">
                            <img :src="card.image" alt="img" class="rounded-full mx-auto h-[180px] w-[180px] object-cover">
                        </div>
                        <div class="p-4 text-center rounded-lg">
                            <p class="text-[24px] font-semibold font-[cursive] uppercase mt-5">{{ card.name }}</p>
                            <p class="text-[18px] font-[cursive] mt-5">{{ card.dec }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
