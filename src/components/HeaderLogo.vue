<script setup>
    import { useRouter } from 'vue-router';
    import { ChevronLeft } from "../components/Icons/Index";

    const router = useRouter();

    const props = defineProps({
        isBackButton:{
            type:Boolean,
            default: true
        }
    });
</script>
<template>
    <div v-if="isBackButton" @click="router.back()" 
         class="absolute top-5 left-5 z-20 mt-[-5px] bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)] p-2 rounded-[10px]">
        <ChevronLeft size="25"/>
    </div>
    <div>
        <img src="../assets/Vector 3.svg" class="z-0 fixed rotate-180 w-full max-h-[60%] h-auto  top-0"/>
    </div>
    <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</template>
