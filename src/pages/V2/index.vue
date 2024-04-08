<script setup>
    import RadioGroup from '../../components/RadioGroup.vue';
    import { ref } from 'vue';
    const options = [
        // { name: 'Bank', id: 1 },
        // { name: 'Cintas', id: 2 },
        { name: 'Medical Office', id: 3 },
        { name: 'American Heritage', id: 4 },
    ];
    const selectedOptions = ref('');
</script>
<template>
    <div class="h-screen z-50">
        <img src="../../assets/Pattern.png" class="h-[30%] sm:hidden w-[100%] bg-cover" />
        <img src="../../assets/Desktop-Pattern.png" class="hidden sm:block h-[100%] w-[100%] relative z-10" />
        <img src="../../assets/Gradient.png" class="sm:hidden h-auto absolute bottom-[60%] z-10 w-[100%] bg-cover" />
        <div class="sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10">
            <img src="../../assets/subwayLogo.png" class="h-[100px] w-[100px] sm:w-[300px] sm:h-[300px] relative z-50 object-cover mx-auto" />
            <h1 class="text-center text-2xl font-bold text-green-gradient">SUBWAY DELIVERY</h1>
            <div class="text-center flex flex-col gap-2">
                <h3 class="text-xl font-extrabold text-black-green-gradient">Place Order To Get Deliver From</h3>
                <p class="text-xl font-bold text-black">9979 Bustleton Avenue,</p>
                <p class="text-xl font-bold text-black">Philadelphia PA 19115</p>
            </div>
            <div class="p-3">
                <RadioGroup :options="options" v-model="selectedOptions"/>
            </div>
        </div>
        <img src="../../assets/round-overlay.png" class="h-[30%] absolute bottom-0 rotate-180 z-10 w-[60%] bg-cover" />
    </div>
</template>
