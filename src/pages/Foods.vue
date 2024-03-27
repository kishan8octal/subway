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
<style scoped>
    .bg-primary-gradient:not(:hover) {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%), #009C5B;
    }
</style>
<template>
    <section>
        <Button variant="primary" class="mt-5 my-10 mx-3 text-white font-bold" @click="router.back()">Back</Button>
        <div class="p-5 z-50">
            <div class="sm:max-w-7xl mx-auto p-5 sm:p-20">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-48 sm:gap-10">
                    <div 
                            v-for="(card,index) in cards" 
                            :key="index"
                            @click="handleNavigate(card.id)"
                            class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 
                            pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 
                            hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span class="absolute top-10 z-0 h-[150px] w-[150px] rounded-full
                         bg-primary-gradient transition-all duration-300 group-hover:scale-[10]"></span>
                        <div class="relative z-10 mx-auto max-w-md">
                            <span class="grid h-[150px] w-[150px] place-items-center 
                            rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <div class="text-white transition-all ">
                    <img :src="card.image" alt="img" class="h-[150px] w-[150px] rounded-full mx-auto object-cover">
                </div>
            </span>
                            <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p class="font-semibold font-[cursive] text-2xl">{{card.name}}</p>
                            </div>
                            <div class="pt-5 text-base font-semibold leading-7">
                                <p 
                                        class="text-primary transition-all duration-300 group-hover:text-white font-[cursive] text-lg">{{card.dec}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
