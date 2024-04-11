<script setup>
    import { ref } from 'vue';
    import { ChevronRight } from '../../components/Icons/Index';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    const options = [
        // { name: 'Bank', id: 1 },
        // { name: 'Cintas', id: 2 },
        { name: 'Medical Office', id: 3 },
        { name: 'American Heritage', id: 4 },
    ];
    const selectedOptions = ref('');
    const router = useRouter();
    const store = useStore();
    
    const handleDeliveryTime = (option) => {
        store.dispatch('storeData', { branch: option });
        setTimeout(() => {
            router.push({ name: 'deliveryTimeV2' });
        }, 100);
    }
    
</script>
<template>
    <div class="h-screen z-50">
        <img src="../../assets/Pattern.png" class="h-[20%] sm:hidden w-[100%] bg-cover" />
        <img src="../../assets/Desktop-Pattern.png" class="hidden sm:block h-[100%] w-[100%] relative z-10" />
        <img src="../../assets/Gradient.png" class="sm:hidden h-auto absolute bottom-[70%] z-10 w-[100%] bg-cover" />
        <div class="sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10 sm:w-[40%] px-2">
            <img src="../../assets/subwayLogo.png" class="h-[100px] w-[100px] sm:w-[300px] sm:h-[300px] relative z-50 object-cover mx-auto" />
            <!-- <h1 class="text-center text-2xl font-bold text-green-gradient lobster-regular">SUBWAY DELIVERY</h1> -->
            <div class="text-center flex flex-col gap-2">
                <h3 class="text-[28px] font-extrabold text-green-gradient  lobster-regular mt-3">Place Order To Get Deliver From</h3>
                <div class="flex justify-center mt-2 items-center gap-3">
                    <img src="../../assets/outlineLocation.svg" class="h-[30px]"/>
                    <p class="flex flex-col text-start text-2xl viga-regular text-black">
                        <span>Philadelphia PA 19115</span>
                        <span>9979 Bustleton Avenue,</span>
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-10 px-6 mt-10">
                <div v-for="option in options"
                     class="py-4 px-5 flex items-center justify-between rounded-2xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" @click="handleDeliveryTime(option)">
                    <span class="text-xl viga-regular text-green-gradient">{{ option.name }}</span>
                    <ChevronRight size="21" />
                </div>
            </div>
        </div>
<!--        <img src="../../assets/round-overlay.png" class="h-[30%] sm:h-[40%]  absolute bottom-0 rotate-180 z-10 w-[60%] sm:w-[40%] bg-cover" />-->
    </div>
</template>
