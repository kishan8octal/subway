<script setup>
    import Button from '../components/Button.vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    const cards = [
        {
            id: 1,
            name: 'classic sandwiches',
            dec: '6 Inch Sandwich + Chips + Soda = $10.00 with tax'
        },
        {
            id: 2,
            name: 'classic sandwiches',
            dec: 'Footlong Sandwich + Chips + Soda = $15.00 with tax',
        },
        { id: 3, name: 'salad', dec: 'Salad + water bottle = $10.00 with tax' },
        // {
        //     id: 4,
        //     name: 'classic sandwiches',
        //     dec: '4. Cinnabon Churro = $ 2.16 Antey Annie’s Pretzel   = $ 3.24 Footlong Cookie = $ 5.40',
        // },
    ];
    const handleNavigate = (id)=>{
        console.log("value",id);
        router.push({
            name: 'cardDetails',
            params: {
                card: id,
            },
        });
    }
</script>
<template>
    <section>
        <Button class="mt-5 my-10 mx-3 text-white font-bold" @click="router.back()">Back</Button>
        <div class="container mx-auto py-10 px-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div
                        v-motion
                        :initial="{ opacity: 0, y: 100 }"
                        :enter="{ opacity: 1, y: 0, scale: 1 }"
                        :variants="{ custom: { scale: 2 } }"
                        :hovered="{ scale: 1.1 }"
                        :delay="200"
                        class="bg-gray-900 shadow-lg rounded-lg cursor-pointer" v-for="(card,index) in cards" :key="index" @click="handleNavigate(card.id)">
                        <div class="rounded-lg">
                            <img src="../assets/classicsendwich.png" alt="Image 1" class="rounded-sm h-100 w-100 object-cover">
                        </div>
                    <div class="p-4 text-center rounded-lg">
                        <p class="text-[24px] font-semibold font-[cursive] text-white uppercase mt-5">{{ card.name }}</p>
                        <p class="text-white text-[18px] font-[cursive] mt-5">{{ card.dec }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
