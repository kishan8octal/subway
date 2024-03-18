<script setup>
import Button from "../components/Button.vue";
import { useRoute, useRouter } from "vue-router";
import sandwichImage from "../assets/sandwich.png";
import saladImage from "../assets/salad.png";

const router = useRouter();
const { params } = useRoute();

const sandwitchCategories = [
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
const sandwitchCategoriesSecond = [
    {
        id: 1,
        name: "Hearty Multigrain",
        des: "400 Cals",
    },
    {
        id: 2,
        name: "Artisan Italian",
        des: "400 Cals",
    },
    {
        id: 3,
        name: "Italian Herbs & Cheese",
        des: "480 Cals",
    },   
];
const selectedCategoryItems = params.food == 1 ? sandwitchCategories : sandwitchCategoriesSecond;
const showCheeseDetails = (item) => {
  router.push({
    name: "categoryItem",
    params: {
        branch:params.branch,
        time:params.time,
        food:params.food,
        category:params.category,
        item: item.id,
    },
  });
};
</script>
<template>
  <section>
    <Button variant="primary" class="mt-5 my-10 mx-3 text-white font-bold" @click="router.back()"
      >Back</Button
    >
    <div class="container mx-auto py-10 px-5">
        <div class="text-green-600 font-mono font-bold text-xl my-5"> Select the Bread</div>
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
          v-for="(item, index) in selectedCategoryItems"
          :key="index"
          @click="showCheeseDetails(item)"
        >
          <img
            src="https://png.pngtree.com/png-clipart/20220215/ourmid/pngtree-breakfast-and-bakery-bread-loaf-png-image_4389284.png"
            alt="bread"
            class="object-cover h-[50px] w-[50px] rounded-xl"
          />
          <div class="text-gray-700 font-[cursive] flex flex-col">
            <span>
              {{ item.name }}
            </span>
            <span class="text-slate-800">
              {{ item.des }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
