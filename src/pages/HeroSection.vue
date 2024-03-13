<script setup>
    import RadioGroup from '../components/RadioGroup.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const plans = [
        { name: 'Bank', id: 1 },
        { name: 'Cintas', id: 2 },
        { name: 'Medical Office', id: 3 },
        { name: 'American Heritage', id: 4 },
    ];

    const handleChangeItem = (value) => {
        router.push({
            name: 'timeSection',
            params: {
                plan: value.id,
            },
        });
    };
</script>
<template>
    <!--    <div class="overlay-img"></div>-->
    <section class="flex items-center h-screen p-5">
        <div class="container mx-auto py-10 bg-[#1f1d2b] p-5 shadow-sm shadow-[#EA7C69] rounded-xl  border border-primary ring-2 ring-primary ring-opacity-30">
            <div class="flex flex-col gap-10">
                <div>
                    <h3 class="text-2xl  font-bold text-primary font-sans">Place Order To Get Deliver From:</h3>
                </div>
                <div>
                    <h1 class="text-5xl font-bold text-gray-100 font-mono text-shadow-lg">Subway</h1>
                </div>
                <div class="font-sans">
                    <p class="text-2xl text-white"> 9979 Bustleton Avenue,</p>
                    <p class="text-2xl text-white">Philadelphia PA 19115</p>
                </div>
                <div>
                    <RadioGroup :items="plans" @change="handleChangeItem"/>
                </div>
            </div>
        </div>
    </section>
</template>
