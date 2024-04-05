<script setup>
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import {  useRouter } from "vue-router";
import drinkDasaniBottle from "../assets/drinkDasaniBottle.avif";
import drinkDietCoke from "../assets/drinkDietCoke.avif";
import drinkspritelogo from "../assets/drinkspritelogo.avif";
import drinkCocaCola from "../assets/drinkCocaCola.avif";
import { useStore } from 'vuex';
import { computed } from 'vue';
const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);

const drinkCard = [
    {
    id: 1,
    name: "Dasani Water",
    image: drinkDasaniBottle
  },
  {
    id: 2,
    name: "Diet Coke",
    image: drinkDietCoke
  },
  {
    id: 3,
    name: "Sprite",
    image: drinkspritelogo,
  },
  {
    id: 4,
    name: "Coca-Cola Classic",
    image: drinkCocaCola
  }
]
</script>
<template>
  <section>
    <Button
      variant="primary"
      class="mt-5 my-10 mx-3 text-white font-bold"
      @click="router.back()"
      >Back</Button
    >
    <div class="container mx-auto py-10 px-5">
      <Card>
        <h1>Order Details</h1>
        <div>Your branch :- {{orderDetails.branch.name }}</div>
        <div> Your Delivery Time :- {{orderDetails.deliveryTime }}</div>
        <div> Your Food :- {{orderDetails.food.name }}</div>
        <div> Your Food Category :- {{orderDetails.foodCategory.name }}</div>
        <div> Your Food Category Item:- {{orderDetails.categoryItem.name }}</div>
        <div> Your Food Category Selected Item:- {{orderDetails.selectedCategoryItem.name }}</div>
        <div> Your Food Category Selected Toasted:- {{orderDetails.selectedToasted.name }}</div>
        <div> Selected Vaggies:- {{orderDetails.vaggies.name }}</div>
        <div> Selected Sauce:- {{orderDetails.souces.name }}</div>
        <div> Selected Chips:- {{orderDetails.chips.name }}</div>
      </Card>
      <div class="text-green-600 font-extrabold text-xl my-5">
        Select Your Drink
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.1 }"
          v-for="(item, index) in  drinkCard"
          :key="index"
          class="relative"
        >
          <Card
            class="border border-green-600 ring-2 ring-green-600 ring-opacity-20 cursor-pointer"
          >
            <div class="flex items-center gap-5">
              <div>
                <img
                  :src="item.image"
                  alt="bread"
                  class="object-cover h-[60px] w-[60px] rounded-xl"
                />
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-gray-950 font-extrabold text-xl">{{
                  item.name
                }}</span>
                <!-- <span class="text-gray-700 text-lg">{{ item.des }}</span> -->
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
