<script setup>
    import RadioGroup from '../components/RadioGroup.vue';
    import Card from '../components/Card.vue';
    import Header from '../components/Header.vue';
    import QrCode from '../components/QrCode.vue';
    import { useRouter } from 'vue-router';
    import { ref, watch } from 'vue';
    import { useStore } from 'vuex';

    const router = useRouter();
    const store = useStore();
    const options = [
        // { name: 'Bank', id: 1 },
        // { name: 'Cintas', id: 2 },
        { name: 'Medical Office', id: 3 },
        { name: 'American Heritage', id: 4 },
    ];
    const selectedOptions = ref('');

    watch(selectedOptions, (value) => {
        store.dispatch('storeData', { branch: value });
        setTimeout(() => {
            router.push({ name: 'deliveryTime' });
        }, 100);
    });
</script>rou
<template>
    <section class=" h-screen p-5 z-50">
<!--        <QrCode/>-->
<Header />
        <Card class="shadow-lg container mx-auto mt-5">
            <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" class="flex flex-col gap-10">
                <div>
                    <h3 class="text-2xl  font-extrabold  text-black">Place Order To Get Deliver From</h3>
                </div>
                <div>
                    <!-- <h1 class="text-5xl font-bold  text-gray-800 text-shadow-lg">Subway</h1> -->
                    <img class="h-[100px] w-[150px] filter" src="../assets/subwayLogo.png" />
                </div>
                <div class="">
                    <p class="text-2xl font-extrabold text-black"> 9979 Bustleton Avenue,</p>
                    <p class="text-2xl font-extrabold text-black">Philadelphia PA 19115</p>
                </div>
                <div>
                    <RadioGroup :options="options" v-model="selectedOptions"/>
                </div>
            </div>
        </Card>
    </section>
</template>
<style scoped>
.filter{
    filter: drop-shadow(2px 4px 6px black);
}
</style>
