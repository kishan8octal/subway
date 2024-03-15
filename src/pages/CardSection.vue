<script setup>
    import Button from '../components/Button.vue';
    import { useRouter } from 'vue-router';
    
    const cards = [
        {
            id: 1,
            name: 'classic sandwiches',
            dec: '1. Six Inch Sandwich + Chips + Soda Including tax and delivery =$10.00',
        },
        {
            id: 2,
            name: 'classic sandwiches',
            dec: 'Footlong Sandwich + Chips + Soda +Cookie Including tax and delivery =$15.00',
        },
        { id: 3, name: 'classic sandwiches', dec: 'Salad bowl + water bottle Including tax and delivery =$10.00' },
        {
            id: 4,
            name: 'classic sandwiches',
            dec: '4. Cinnabon Churro = $ 2.16 Antey Annie’s Pretzel   = $ 3.24 Footlong Cookie = $ 5.40',
        },
    ];
    const router = useRouter();
</script>
<template>
    <section>
        <Button class="mt-5 my-10 mx-3 text-white font-bold" @click="router.back()">Back</Button>
        <div class="container mx-auto py-10 px-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <!-- Image items -->
                <div
                        v-motion
                        :initial="{ opacity: 0, y: 100 }"
                        :enter="{ opacity: 1, y: 0, scale: 1 }"
                        :variants="{ custom: { scale: 2 } }"
                        :hovered="{ scale: 1.1 }"
                        :delay="200"
                        class="bg-gray-900 cursor-pointer shadow-lg rounded-lg" 
                        v-for="(card,index) in cards" :key="index">
                    <router-link to="/card-details">
                        <div class="rounded-lg">
                            <img src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg" alt="Image 1" class="rounded-sm h-100 w-100 object-cover">
                        </div>
                    </router-link>
                    <div class="p-4 text-center rounded-lg">
                        <p class="text-lg font-semibold text-white uppercase mt-10">{{ card.name }}</p>
                        <p class="text-white mt-5">{{ card.dec }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
