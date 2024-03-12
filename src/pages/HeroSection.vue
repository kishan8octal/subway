<script setup>
    import RadioGroup from '../components/RadioGroup.vue';
</script>
<template>
    <section class="flex items-center h-screen p-5">
        <div class="container mx-auto py-10 bg-white p-5 shadow-lg rounded-lg">
            <div class="flex flex-col gap-5">
                <div>
                    <h3 class="text-2xl  font-bold text-sky-600">Place Order To Get Deliver From:</h3>
                </div>
                <div>
                    <h1 class="text-4xl font-medium  text-red-500">Subway</h1>
                </div>
                <div>
                    <p class="text-lg text-emerald-700"> 9979 Bustleton Avenue</p>
                    <p class="text-lg text-emerald-700">Philadelphia PA 19115</p>
                </div>
                <div>
                    <RadioGroup />
                </div>
            </div>
        </div>
    </section>
</template>
<style></style>
