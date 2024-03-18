<script setup>
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import {  useRouter } from "vue-router";

const router = useRouter();
const VeggiesCard = [
  {
    id: 1,
    name: "Lettuce",
    des: "5 Cals",
  },
  {
    id: 2,
    name: "Tomatoes",
    des: "15 Cals",
  },
  {
    id: 3,
    name: "Red Onions",
    des: "5 Cals",
  },
  {
    id: 4,
    name: "Spinach",
    des: "0 Cals",
  },
  {
    id: 5,
    name: "Cucumbers",
    des: "0 Cals",
  },
];
</script>
<template>
    <section>
      <Button variant="primary" class="mt-5 my-10 mx-3 text-white font-bold" @click="router.back()">Back</Button>
      <div class="container mx-auto py-10 px-5">
          <div class="text-green-600 font-mono font-bold text-xl my-5">Select veggies</div>

          <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
              <div
                      v-motion
                      :initial="{ opacity: 0, y: 100 }"
                      :enter="{ opacity: 1, y: 0, scale: 1 }"
                      :variants="{ custom: { scale: 2 } }"
                      :hovered="{ scale: 1.1 }"
                      v-for="(item, index) in VeggiesCard" :key="index" class="relative">
                  <Card class="border border-green-600 ring-2 ring-green-600 ring-opacity-20 cursor-pointer">
                      <Button class="text-md absolute right-2 top-2" variant="secondaryDestructive">Remove</Button>
                      <div class="flex items-center gap-5">
                          <div>
                              <img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGL2-K4dw9cCSVZnTMspWXcsG5b0Ih9DTurw&usqp=CAU"
                                      alt="bread"
                                      class="object-cover h-[60px] w-[60px] rounded-xl "
                              />
                          </div>
                          <div class="flex flex-col gap-1">
                              <span class="text-gray-950 font-semibold text-xl">{{ item.name }}</span>
                              <span class="text-gray-700 text-lg">{{ item.des }}</span>
                          </div>
                      </div>
                      <div class="flex  gap-5 mt-5 justify-center">
                          <Button class="text-md" variant="secondaryDestructive">Less</Button>
                          <Button class="text-md" variant="primary">Regular</Button>
                          <Button class="text-md" variant="secondaryDestructive">More</Button>
                      </div>
                  </Card>         
              </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  </style>
