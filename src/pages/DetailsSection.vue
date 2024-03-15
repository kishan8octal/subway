<script setup>
import Button from "../components/Button.vue";
import { useRoute, useRouter } from "vue-router";
import sandwichImage from "../assets/sandwich.png";
import saladImage from "../assets/salad.png";

const router = useRouter();
const { params:{card} } = useRoute();
const saladCard = [
    {
    id: 1,
    name: "Black forest Ham",
    image: saladImage,
  },
  {
    id: 2,
    name: "Buffalo Chicken",
    image: saladImage,
  },
  {
    id: 3,
    name: "Oven Roasted Turkey",
    image: saladImage,
  },
  {
    id: 4,
    name: "Grilled Chicken",
    image: saladImage,
  },
  {
    id: 5,
    name: "Steak & Cheese",
    image: saladImage,
  },
  {
    id: 6,
    name: "Tuna",
    image: saladImage,
  },
  {
    id: 7,
    name: "Veggie Delite",
    image: saladImage,
  },
  {
    id: 8,
    name: "Meatball Marinara",
    image: saladImage,
  },
  {
    id: 9,
    name: "Rotisserie-style Chicken",
    image: saladImage,
  },
  {
    id: 10,
    name: "Roast Beef",
    image: saladImage,
  },
]
const SandwichCards = [
  {
    id: 1,
    name: "Black forest Ham",
    image: sandwichImage,
  },
  {
    id: 2,
    name: "Buffalo Chicken",
    image: sandwichImage,
  },
  {
    id: 3,
    name: "Oven Roasted Turkey",
    image: sandwichImage,
  },
  {
    id: 4,
    name: "Grilled Chicken",
    image: sandwichImage,
  },
  {
    id: 5,
    name: "Steak & Cheese",
    image: sandwichImage,
  },
  {
    id: 6,
    name: "Tuna",
    image: sandwichImage,
  },
  {
    id: 7,
    name: "Veggie Delite",
    image: sandwichImage,
  },
  {
    id: 8,
    name: "Meatball Marinara",
    image: sandwichImage,
  },
  {
    id: 9,
    name: "Rotisserie-style Chicken",
    image: sandwichImage,
  },
  {
    id: 10,
    name: "Italian BMT",
    image: sandwichImage,
  },
  {
    id: 11,
    name: "Chicken Bacon Ranch",
    image: sandwichImage,
  },
  {
    id: 12,
    name: "Sweet Onion Chicken Teriyaki",
    image: sandwichImage,
  },
];
</script>
<template>
    <section>
      <Button class="mt-5 my-10 mx-3 text-white font-bold" @click="router.back()">Back</Button>
      <div class="container mx-auto py-10 px-5">
        <div v-if="card === '1' || card === '2'"
             class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-10 sm:px-2">
          <div
                  v-motion
                  :initial="{ opacity: 0, y: 100 }"
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :variants="{ custom: { scale: 2 } }"
                  :hovered="{ scale: 1.1 }"
                  :delay="200"
                  class="bg-gray-900 shadow-lg rounded-[1rem] flex flex-col items-center justify-center relative" v-for="(card, index) in SandwichCards" :key="index">
            <div class="absolute top-[-40px]">
              <img :src="card.image" alt="Image 1" class="rounded-sm h-[100px] w-[120px] object-cover" />
            </div>
            <h3 class="text-white text-center text-2xl font-[cursive] mb-4 mt-28">{{ card.name }}</h3>
          </div>
        </div>
        <div v-if="card === '3'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-10 sm:px-2 relative">
            <div class="bg-gray-900 shadow-lg rounded-[1rem] flex flex-col items-center justify-center" v-for="(card, index) in saladCard" :key="index">
              <div class="absolute top-[-40px]">
                <img :src="card.image" alt="Image 1" class="rounded-sm h-[100px] w-[120px] object-cover" />
              </div>
              <h3 class="text-white text-center text-2xl font-[cursive] mb-4 mt-28">{{ card.name }}</h3>
            </div>
          </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  </style>
