<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import HeaderLogo from "../components/HeaderLogo.vue";

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
    1: "10080 Sandmeyer Ln Philadelphia, PA 19116",
    2: "American Heritage Credit Union 2068 Red Lion Rd, Philadelphia, PA 19115",
  }[orderDetails.value.branch.id];
});

const handleDeliveryTime = (deliveryTime) => {
  orderDetails.value.deliveryTime = deliveryTime;
  store.dispatch("storeData", orderDetails.value);
  setTimeout(() => {
    router.push({ name: "foods" });
  }, 100);
};
</script>
<template>
  <div class="z-50">
    <HeaderLogo />
    <div class="h-full">
        <div class="z-10 relative top-0">
            <img class="z-10 h-[350px] mx-auto" alt="Illustartion pattern" src="../assets/Illustartion.png" />
        </div>
      <div class="z-10 relative mx-auto p-5 mt-8 sm:p-20">
          <div class="py-4 px-5 flex flex-col rounded-2xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <p class="mb-2 text-[#7DA640]  viga-regular">Delivery To </p>
            <div class="flex justify-center items-center">
              <img src="../assets/outlineLocation.svg" class="h-[25px] mr-2" />
              <span class="text-[1rem] viga-regular text-black">{{ address }}</span>
            </div>
          </div>
        <div class="text-center text-3xl mt-5">
          <div class="items-start justify-start py-0">
            <h2
              class="m-0 flex-1 relative leading-[131.02%] font-extrabold text-green-gradient whitespace-pre-wrap lobster-regular">
              Select Your Delivery Time One
            </h2>
          </div>
          <div class="flex justify-center gap-3 mt-8">
            <button
              class="cursor-pointer rounded-lg [border:none] py-3 px-[25px] bg-[transparent] [background:linear-gradient(98.81deg,_#53e88b,_#15be77)]">
              <div @click="handleDeliveryTime(startTime)"
                class="relative text-base viga-regular text-white min-w-[38px] z-[1]">
                {{ startTime }} AM
              </div>
            </button>
            <button @click="handleDeliveryTime(endTime)"
              class="cursor-pointer rounded-lg [border:none] py-3 px-[25px] bg-[transparent] [background:linear-gradient(98.81deg,_#53e88b,_#15be77)]">
              <div class="relative text-base viga-regular text-white min-w-[38px] z-[1]">
                {{ endTime }} PM
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
