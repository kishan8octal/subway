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
        <div v-if="card === '1' || card === '2'" class="flex flex-wrap gap-5">
          <div class="main_card_section bg-[#1F1D2B] shadow-lg rounded-[1rem] flex flex-col items-center justify-center" v-for="(card, index) in SandwichCards" :key="index">
            <div class="card-image-container">
              <img :src="card.image" alt="Image 1" class="rounded-sm h-[100px] w-[120px] object-cover" />
            </div>
            <h3 class="text-white text-center mt-3 font-[cursive]">{{ card.name }}</h3>
          </div>
        </div>
        <div v-if="card === '3'" class="flex flex-wrap gap-5">
            <div class="main_card_section bg-[#1F1D2B] shadow-lg rounded-[1rem] flex flex-col items-center justify-center" v-for="(card, index) in saladCard" :key="index">
              <div class="card-image-container">
                <img :src="card.image" alt="Image 1" class="rounded-sm h-[100px] w-[120px] object-cover" />
              </div>
              <h3 class="text-white text-center mt-3 font-[cursive]">{{ card.name }}</h3>
            </div>
          </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .main_card_section {
    padding: 20px;
    margin-bottom: 15px;
    width: calc(50% - 20px);
  }
  
  @media (min-width: 640px) {
    .main_card_section {
      width: calc(33.33% - 20px); 
    }
  }
  
  @media (min-width: 1024px) {
    .main_card_section {
      width: calc(25% - 20px); 
    }
  }
  
  .card-image-container {
    margin-top: -50px; 
  }
  </style>