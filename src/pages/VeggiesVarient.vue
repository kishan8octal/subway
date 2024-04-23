<script setup>
import HeaderLogo from '../components/HeaderLogo.vue';
import OrderDetails from '../components/OrderDetails.vue';
import { veggiesVariants } from '../components/helper';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);
const isDetailsShow = ref(false);

const selectedArray = ref(veggiesVariants.map(item => {
    return {id:item.id, value:false, variant: 0};
}));

const saucesDetails = (data) => {
    let SelectedVariant = selectedArray.value.find(item => item.id == data.id);
    SelectedVariant.value && (SelectedVariant.variant = !SelectedVariant.variant);
    SelectedVariant.value = !SelectedVariant.value;
};

const handleShowDetails = () => {
    isDetailsShow.value = true;
};

const closeDetails = () => {
  isDetailsShow.value = false; // Hide the order details overlay
};

const handleItemVariant = (data, value) => {
    let SelectedVariant = selectedArray.value.find(item => item.id == data.id);
    SelectedVariant.variant = value;
    // selectedArray.value
}

const handleNextPage = () =>{
    let veggies = veggiesVariants.map((item, index) => {
        if (selectedArray.value[index]?.value) {
            let variant = null;
            switch(selectedArray.value[index]?.variant) {
                case 1:
                    variant = 'Less';
                    break;
                case 2:
                    variant = 'Regular';
                    break;
                case 3:
                    variant = 'More';
                    break;
            }
            return { ...item, variant };
        }
    }).filter(Boolean);
    
    orderDetails.value.veggies = veggies;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        router.push({ name: 'saucesVarient' });
    }, 100);
}
</script>
<template>
    <section>
        <HeaderLogo />
        <div class="container mx-auto py-10 px-5 mt-14">
            <button
                class="relative mb-14 cursor-pointer py-3 px-[25px] rounded-lg  [border:none] w-full bg-[transparent] [background:linear-gradient(98.81deg,_#53e88b,_#15be77)]">
                <div @click="handleShowDetails()"
                    class="relative text-[1.2rem] font-semibold uppercase viga-regular text-white">
                    Show Selected Order Details
                </div>
            </button>
            <OrderDetails @close="closeDetails" v-if="isDetailsShow" :isDetailsShow="isDetailsShow" :orderDetails="orderDetails" />
            <div class="z-20 relative bottom-3 flex justify-center gap-3 lobster-regular text-center">
                <!-- <h1 class="text-black text-3xl">Veggies</h1> -->
                <span class="text-white text-3xl">
                Select Your Veggies
                </span>
            </div>

            <div class="mt-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div v-for="(item, index) in veggiesVariants" :key="index" @click="saucesDetails(item)"
                    class="relative">
                    <Card class="bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]"
                    :class="selectedArray[index].value ? 'border-2 border-green-600 ring-2 ring-green-600 ring-opacity-20' : ''">
                        <div class="flex items-center gap-5">
                            <div v-if="item.image">
                                <img :src="item.image" alt="cheese variants"
                                    class="object-cover h-[100px] rounded-xl" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-black viga-regular font-thin text-xl">
                                    {{ item.name }}
                                </span>
                                <span class="text-gray-500 text-sm">
                                    {{ item.des }}
                                </span>
                            </div>
                        </div>
                        <div class="flex justify-center gap-5" v-if="selectedArray[index].value === true">
                            <span @click.stop="handleItemVariant(item, 1)" 
                            class="p-2  text-sm rounded-md"
                            :class="selectedArray[index].variant == 1 ? 'text-white bg-gray-900' : 'bg-gray-400 text-white'">Less</span>
                            <span @click.stop="handleItemVariant(item, 2)" 
                            class="p-2 text-sm rounded-md"
                            :class="selectedArray[index].variant == 2 ? 'text-white bg-gray-900' : 'bg-gray-400 text-white'">Regular</span>
                            <span @click.stop="handleItemVariant(item, 3)" 
                            class="p-2 text-sm rounded-md"
                            :class="selectedArray[index].variant == 3 ? 'text-white bg-gray-900' : 'bg-gray-400 text-white'">More</span>
                            </div>
                    </Card>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <Button @click="handleNextPage" variant="primary" class="mt-3">Next</button>
            </div>
        </div>
    </section>
</template>
