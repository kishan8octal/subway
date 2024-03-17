<script setup>
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();


</script>
<template>
    <section>
            <Button class="mt-5 mx-3 text-white font-bold" @click="router.back()">Back</Button>
        <div class="flex items-center h-screen p-5">
            <div class="container mx-auto py-10 bg-[#1f1d2b] p-5 shadow-sm shadow-[#EA7C69] rounded-xl  border border-[#EA7C69] ring-2 ring-[#EA7C69] ring-opacity-30">
                <div class="flex flex-col gap-5 items-center sm:items-start">
                    <div class="text-white font-mono font-bold text-lg">1.Toasted</div>
                    <div class="text-white font-bold">2.Not toasted</div>
                </div>
            </div>
        </div>
    </section>
</template>
