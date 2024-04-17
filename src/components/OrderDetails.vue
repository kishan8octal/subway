<script setup>
import Card from '../components/Card.vue';
import CloseIcon from "../components/Icons/Close.vue";
const emit  = defineEmits(['close']);
const props = defineProps({
  orderDetails: {
    type: Object,
    default: {},
  },
  isDetailsShow: Boolean
});

const closeDetails = () => {
  // console.log("clicked");
  emit('close');
};
</script>
<template>
  <div>
    <!-- Overlay -->
    <div v-if="isDetailsShow" class="fixed pointer-events-none inset-0 bg-gray-800 bg-opacity-50 z-50"></div>
    <button @click="closeDetails"
      class="fixed z-[9999] top-5 left-5 mt-[-5px] bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)] p-2 rounded-[10px]">
      <CloseIcon size="25"  />
    </button>
    <!-- Order Details Content -->
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <!-- Order Details Card -->
      <Card class="bg-white shadow-lg !rounded-2xl w-[90%]">
        <!-- Order Details Header -->
        <h1 class="text-3xl font-extrabold uppercase text-center viga-regular text-green-gradient">Order Details</h1>

        <!-- Order Details Content -->
        <div class="p-3">
          <!-- Location Icon -->
          <!-- <img src="../assets/IconLocation.png" alt="location" class="h-10 mx-auto mb-4"> -->

          <!-- Branch Name -->
          <div v-if="!!orderDetails?.branch?.name" class="text-start mt-3 viga-regular text-black font-thin">
            Your branch | {{ orderDetails?.branch?.name }}
          </div>
          <!-- Delivery Time -->
          <div v-if="!!orderDetails?.deliveryTime" class="text-start  text-black viga-regular font-thin mt-2">
            Your Delivery Time | {{ orderDetails?.deliveryTime }}
          </div>
          <hr class="h-px my-[12px] bg-gray-300 border-0 dark:bg-gray-700">

          <div class="text-start">
            <span class="text-3xl text-start font-extrabold flex flex-col gap-[5px] lobster-regular mb-3">Your Food Items <p
                class="text-[#7DA640] text-end">Summary</p></span>
            <template v-for="(value, key) in orderDetails" :key="key">
              <div v-if="key !== 'branch' && key !== 'deliveryTime' && !!value?.name"
                class="text-[#7DA640] text-[20px] viga-regular">
                * {{ value?.name }}
              </div>
            </template>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>