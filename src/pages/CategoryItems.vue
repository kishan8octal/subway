<script setup>
import Button from "../components/Button.vue";
import { useRoute, useRouter } from "vue-router";
import sandwichImage from "../assets/sandwich.png";
import saladImage from "../assets/salad.png";

const router = useRouter();
const breadCard = [
  {
    id: 1,
    name: "Hearty Multigrain",
    des: "200 Cals",
  },
  {
    id: 2,
    name: "Artisan Italian",
    des: "200 Cals",
  },
  {
    id: 3,
    name: "Italian Herbs & Cheese",
    des: "240 Cals",
  },
];
const showCheeseDetails = (item) => {
  router.push({
    name: "categoryItem",
    params: {
      id: item.id,
    },
  });
};
</script>
<template>
  <section>
    <Button class="mt-5 my-10 mx-3 text-white font-bold" @click="router.back()"
      >Back</Button
    >
    <div class="container mx-auto py-10 px-5">
      <h1 class="text-white font-[cursive] text-[24px] mb-5">
        Select the Bread
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-10 sm:px-2"
      >
        <div
          class="bg-gray-900 shadow-lg rounded-[1rem] flex gap-8 items-center justify-center relative px-4 py-4 cursor-pointer"
          v-for="(card, index) in breadCard"
          :key="index"
          @click="showCheeseDetails(card)"
        >
          <img
            src="https://png.pngtree.com/png-clipart/20220215/ourmid/pngtree-breakfast-and-bakery-bread-loaf-png-image_4389284.png"
            alt="bread"
            class="object-cover h-[50px] w-[50px] rounded-xl"
          />
          <div class="text-white font-[cursive] flex flex-col">
            <span>
              {{ card.name }}
            </span>
            <span class="text-slate-300">
              {{ card.des }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
