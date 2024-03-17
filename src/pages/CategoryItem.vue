<script setup>
import Button from "../components/Button.vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const cheeseCard = [
  {
    id: 1,
    name: "American Cheese",
    des: "80 Cals",
  },
  {
    id: 2,
    name: "Pepper Jack",
    des: "100 Cals",
  },
  {
    id: 3,
    name: "Provolone",
    des: "100 Cals",
  },
  {
    id: 4,
    name: "Monterey Cheddar",
    des: "110 Cals",
  },
  {
    id: 5,
    name: "No Cheese",
    des: "0 Cals",
  },
];
</script>
<template>
    <section>
      <Button variant="primary" class="mt-5 my-10 mx-3 text-white font-bold" @click="router.back()">Back</Button>
      <div class="container mx-auto py-10 px-5">
        <h1 class="text-gray-700 font-[cursive] text-[24px] mb-5">
          Select the Cheese
        </h1>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-10 sm:px-2"
        >
          <div
                  v-motion
                  :initial="{ opacity: 0, y: 100 }"
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :variants="{ custom: { scale: 2 } }"
                  :hovered="{ scale: 1.1 }"
            class="cursor-pointer ring-2 ring-green-600 
                    ring-opacity-20 bg-white border border-green-600 shadow-lg rounded-[1rem] flex gap-8 items-center justify-center relative px-4 py-4 cursor-pointer"
            v-for="(card, index) in cheeseCard"
            :key="index"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGL2-K4dw9cCSVZnTMspWXcsG5b0Ih9DTurw&usqp=CAU"
              alt="bread"
              class="object-cover h-[50px] w-[50px] rounded-xl"
            />
            <div class="text-gray-700 font-[cursive] flex flex-col">
              <span>
                {{ card.name }}
              </span>
              <span class="text-slate-800">
                {{ card.des }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  </style>
