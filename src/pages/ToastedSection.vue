<script setup>
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();


</script>
<template>
    <section>
            <Button variant="primary" class="mt-5 mx-3 text-white font-bold" @click="router.back()">Back</Button>
        <div class="flex items-center h-screen p-5">
            <div class="container mx-auto py-10 bg-[#1f1d2b] p-5 shadow-sm shadow-[#EA7C69] rounded-xl  border border-[#EA7C69] ring-2 ring-[#EA7C69] ring-opacity-30">
                <div class="flex flex-col gap-5 items-center sm:items-start">
                    <!-- <div class="text-white font-mono font-bold text-lg">1.Toasted</div> -->
                    <button  class="text-white md:w-1/6 w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Toasted
                    </button>
                    <button  class="text-white md:w-1/6 w-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                      Not toasted
                    </button>
                    <!-- <div class="text-white font-bold">2.Not toasted</div> -->
                </div>
            </div>
        </div>
    </section>
</template>
