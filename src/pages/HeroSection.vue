<script setup>
    import RadioGroup from '../components/RadioGroup.vue';
</script>
<template>
    <div class="overlay-img"></div>
    <section class="flex items-center h-screen p-5">
        <div class="container mx-auto py-10 bg-white p-5 shadow-lg rounded-xl opacity-90">
            <div class="flex flex-col gap-10">
                <div>
                    <h3 class="text-2xl  font-bold text-sky-800 font-sans">Place Order To Get Deliver From:</h3>
                </div>
                <div>
                    <h1 class="text-5xl font-bold text-gray-700 font-mono text-shadow-lg">Subway</h1>
                </div>
                <div class="font-sans">
                    <p class="text-lg text-gray-900"> 9979 Bustleton Avenue,</p>
                    <p class="text-lg text-gray-900">Philadelphia PA 19115</p>
                </div>
                <div>
                    <RadioGroup />
                </div>
            </div>
        </div>
    </section>
</template>