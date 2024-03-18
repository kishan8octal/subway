<script setup>
    import RadioGroup from '../components/RadioGroup.vue';
    import Card from '../components/Card.vue';
    import { useRouter } from 'vue-router';
    import { ref, watch } from 'vue';

    const router = useRouter();

    const options = [
        { name: 'Bank', id: 1 },
        { name: 'Cintas', id: 2 },
        { name: 'Medical Office', id: 3 },
        { name: 'American Heritage', id: 4 },
    ];
    const selectedOptions = ref('');

    watch(selectedOptions, (value) => {
        router.push({ name: 'deliveryTime', params: { plan: value } });
    });
</script>
<template>
    <section class="flex items-center h-screen p-5 z-50">
        <Card class="shadow-lg container mx-auto">
            <div class="flex flex-col gap-10">
                <div>
                    <h3 class="text-2xl  font-bold font-[cursive] text-green-800">Place Order To Get Deliver From:</h3>
                </div>
                <div>
                    <h1 class="text-5xl font-bold font-[cursive] text-gray-800 text-shadow-lg">Subway</h1>
                </div>
                <div class="font-[cursive]">
                    <p class="text-2xl text-gray-700"> 9979 Bustleton Avenue,</p>
                    <p class="text-2xl text-gray-700">Philadelphia PA 19115</p>
                </div>
                <div>
                    <RadioGroup :options="options" v-model="selectedOptions"/>
                </div>
            </div>
        </Card>
    </section>
</template>
