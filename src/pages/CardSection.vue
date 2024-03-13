<script setup>
    import Button from '../components/Button.vue';

    const price = [
        { id: 1, name: '1. Six Inch Sandwich + Chips + Soda Including tax and delivery =$10.00' },
        { id: 2, name: 'Footlong Sandwich + Chips + Soda +Cookie Including tax and delivery =$15.00' },
        { id: 3, name: 'Salad bowl + water bottle Including tax and delivery =$10.00' },
        { id: 4, name: '4. Cinnabon Churro = $ 2.16 Antey Annie’s Pretzel   = $ 3.24 Footlong Cookie = $ 5.40' },
    ];

</script>
<template>
    <section>
        <Button class="mt-5 mx-3 text-white font-bold">Back</Button>
        <div class="flex items-center p-5">
            <div class="container mx-auto py-10 bg-[#1f1d2b] p-5 shadow-sm shadow-[#EA7C69] rounded-xl  border border-[#EA7C69] ring-2 ring-[#EA7C69] ring-opacity-30">
                <!-- <div class="flex gap-2">
                    <div class="w-96 border-2 p-3" v-for="(item,index) in price" :key="index">
                    <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="demo" class="h-80 rounded-md">
                    <h1 class="text-white my-2">{{ item.name }}</h1>
                    </div>
                </div> -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <!-- Card 1 -->
                    <div class="max-w-sm rounded overflow-hidden shadow-lg" v-for="(item,index) in price" :key="index">
                        <img class="w-full" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="food">
                        <div class="px-6 py-4">
                            <div class="font-bold text-gray-100 text-xl mb-2">Item 1</div>
                            <p class="text-gray-100 text-base">
                                {{item.name}} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
