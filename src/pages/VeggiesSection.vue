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
      <Button class="mt-5 my-10 mx-3 text-white font-bold" @click="router.back()">Back</Button>
      <div class="container mx-auto py-10 px-5">
        <h1 class="text-white font-[cursive] text-[24px] mb-5">
          Select veggies
        </h1>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-12 px-10 sm:px-2"
        >
         <div 
                     v-motion
                        :initial="{ opacity: 0, y: 100 }"
                        :enter="{ opacity: 1, y: 0, scale: 1 }"
                        :variants="{ custom: { scale: 2 } }"
                        :hovered="{ scale: 1.1 }"
                        :delay="200"
         class="bg-gray-900  shadow-sm  shadow-white rounded-[1rem] p-5 cursor-pointer"  v-for="(card, index) in cheeseCard"
         :key="index">
            <div
            class="flex gap-8 md:items-center justify-around relative px-4 py-4 cursor-pointer"
          >
           <div class="flex items-center gap-3 w-1/2 flex-col md:flex-row">
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGL2-K4dw9cCSVZnTMspWXcsG5b0Ih9DTurw&usqp=CAU"
                alt="bread"
                class="object-cover h-[60px] w-[60px] rounded-xl "
            />
            <div class="text-white font-[cursive] flex flex-col text-center md:text-left">
                <span>
                {{ card.name }}
                </span>
                <span class="text-slate-300">
                {{ card.des }}
                </span>
            </div>
           </div>
            <div>
                <button class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Remove
                  </button>

            </div>
          </div>
          <div class="flex md:gap-5 justify-around">
            <button  class="text-white md:w-1/6 w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Less
              </button>
            <button  class="text-white md:w-1/6 w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Regular
            </button>
            <button class="text-white md:w-1/6 w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                More
              </button>
          </div>
         </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  </style>