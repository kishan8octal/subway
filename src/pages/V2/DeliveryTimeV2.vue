<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import { ChevronLeft } from "../../components/Icons/Index";

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);

const startTime = computed(() => {
  return {
    1: "11:00",
    2: "11:15",
    3: "11:30",
    4: "11:45",
  }[orderDetails.value.branch.id];
});

const endTime = computed(() => {
  return {
    1: "1:00",
    2: "1:15",
    3: "1:30",
    4: "1:45",
  }[orderDetails.value.branch.id];
});

const address = computed(() => {
  return {
    3: "10080 Sandmeyer Ln Philadelphia, PA 19116",
    4: "American Heritage Credit Union 2068 Red Lion Rd, Philadelphia, PA 19115",
  }[orderDetails.value.branch.id];
});

const handleDeliveryTime = (deliveryTime) => {
  orderDetails.value.deliveryTime = deliveryTime;
  store.dispatch("storeData", orderDetails.value);
  setTimeout(() => {
    router.push({ name: "foodsV2" });
  }, 100);
};
</script>
<template>
  <div class="p-5 z-50">
    <img src="../../assets/curveBackground.png" class="absolute w-full rotate-180 h-[65%] left-0 right-0 top-0 pointer-events-none" />
      <div class="sm:max-w-7xl mx-auto p-5 sm:p-20">
        <div
          @click="router.back()"
          class="absolute mt-[-5px] bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)] p-2 rounded-[10px]"
        >
          <ChevronLeft size="25" />
        </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10"
      >
        <img
          class="mx-auto relative max-h-full pointer-events-none"
          alt="Illustartion pattern"
          src="../../assets/Illustartion.png"
        />
        <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-10"
      >
        <div
          class="py-4 px-5 flex flex-col rounded-2xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
        <p class="mb-2 text-[#7DA640]  viga-regular">Delivery To </p> 
        <div class="flex justify-center items-center">

            <img src="../../assets/outlineLocation.svg" class="h-[25px] mr-2" />
            <span class="text-[1rem] viga-regular text-black">{{ address }}</span>
        </div>
        </div>
      </div>
        <div class="text-center text-3xl">
          <div class="items-start justify-start py-0">
            <h2
              class="m-0 flex-1 relative leading-[131.02%] font-extrabold text-green-gradient whitespace-pre-wrap lobster-regular"
            >
              Select Your Delivery Time One
            </h2>
          </div>
          <div class="flex justify-center gap-3 mt-8">
            <button
              class="cursor-pointer rounded-lg [border:none] py-3 px-[25px] bg-[transparent] [background:linear-gradient(98.81deg,_#53e88b,_#15be77)]"
            >
              <div
                @click="handleDeliveryTime(startTime)"
                class="relative text-base viga-regular text-white min-w-[38px] z-[1]"
              >
                {{ startTime }} AM
              </div>
            </button>
            <button
              @click="handleDeliveryTime(endTime)"
              class="cursor-pointer rounded-lg [border:none] py-3 px-[25px] bg-[transparent] [background:linear-gradient(98.81deg,_#53e88b,_#15be77)]"
            >
              <div
                class="relative text-base viga-regular text-white min-w-[38px] z-[1]"
              >
                {{ endTime }} PM
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
