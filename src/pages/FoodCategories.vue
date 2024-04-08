<script setup>
import Button from "../components/Button.vue";
import { useRouter } from "vue-router";
import sandwichBlackHam from "../assets/sandwichBlackHam.avif";
import sandwichBuffaloChicken from "../assets/sandwichBuffaloChicken.avif";
import sandwichTurkey from "../assets/sandwichTurkey.avif";
import sandwichGrilledChicken from "../assets/sandwichGrilledChicken.avif";
import sandwichsteakCheese from "../assets/sandwichsteakCheese.avif";
import sandwichTuna from "../assets/sandwichTuna.avif";
import sandwichVeggieDelite from "../assets/sandwichVeggieDelite.avif";
import sandwichMeatball from "../assets/sandwichMeatball.avif";
import sandwichRotisserieChicken from "../assets/sandwichRotisserieChicken.avif";
import sandwichUltimateBMT from "../assets/sandwichUltimateBMT.avif";
import sandwichProSweetOnionTeriyaki from "../assets/sandwichProSweetOnionTeriyaki.avif";
import sandwichEliteChickenBaconRanch from "../assets/sandwichEliteChickenBaconRanch.png";
import saladHam_BowlPCP from "../assets/saladHam_BowlPCP.png";
import saladBuffaloChicken from "../assets/saladBuffaloChicken.avif";
import saladTurkey_BowlPCP from "../assets/saladTurkey_BowlPCP.avif";
import saladGrilledChicken from "../assets/saladGrilledChicken.avif";
import saladSteakCheese from "../assets/saladSteakCheese.avif";
import saladTuna from "../assets/saladTuna.avif";
import VeggieDelite_Salad from "../assets/VeggieDelite_Salad.avif";
import saladMeatball from "../assets/saladMeatball.avif";
import saladRotisserieChicken from "../assets/saladRotisserieChicken.avif";
import saladRoastBeef_Bowl from "../assets/saladRoastBeef_Bowl.avif";
import Card from "../components/Card.vue";
import { useStore } from 'vuex';
import { computed } from 'vue';

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);

const saladItems = [
  {
    id: 1,
    name: "Black forest Ham",
    image: saladHam_BowlPCP,
  },
  {
    id: 2,
    name: "Buffalo Chicken",
    image: saladBuffaloChicken,
  },
  {
    id: 3,
    name: "Oven Roasted Turkey",
    image: saladTurkey_BowlPCP,
  },
  {
    id: 4,
    name: "Grilled Chicken",
    image: saladGrilledChicken,
  },
  {
    id: 5,
    name: "Steak & Cheese",
    image: saladSteakCheese,
  },
  {
    id: 6,
    name: "Tuna",
    image: saladTuna,
  },
  {
    id: 7,
    name: "Veggie Delite",
    image: VeggieDelite_Salad,
  },
  {
    id: 8,
    name: "Meatball Marinara",
    image: saladMeatball,
  },
  {
    id: 9,
    name: "Rotisserie-style Chicken",
    image: saladRotisserieChicken,
  },
  {
    id: 10,
    name: "Roast Beef",
    image: saladRoastBeef_Bowl,
  },
];
const SandwitchItems = [
  {
    id: 1,
    name: "Black forest Ham",
    image: sandwichBlackHam,
  },
  {
    id: 2,
    name: "Buffalo Chicken",
    image: sandwichBuffaloChicken,
  },
  {
    id: 3,
    name: "Oven Roasted Turkey",
    image: sandwichTurkey,
  },
  {
    id: 4,
    name: "Grilled Chicken",
    image: sandwichGrilledChicken,
  },
  {
    id: 5,
    name: "Steak & Cheese",
    image: sandwichsteakCheese,
  },
  {
    id: 6,
    name: "Tuna",
    image: sandwichTuna,
  },
  {
    id: 7,
    name: "Veggie Delite",
    image: sandwichVeggieDelite,
  },
  {
    id: 8,
    name: "Meatball Marinara",
    image: sandwichMeatball,
  },
  {
    id: 9,
    name: "Rotisserie-style Chicken",
    image: sandwichRotisserieChicken,
  },
  {
    id: 10,
    name: "Italian BMT",
    image: sandwichUltimateBMT,
  },
  {
    id: 11,
    name: "Chicken Bacon Ranch",
    image: sandwichEliteChickenBaconRanch,
  },
  {
    id: 12,
    name: "Sweet Onion Chicken Teriyaki",
    image: sandwichProSweetOnionTeriyaki,
  },
];
const selectedItemsData = orderDetails?.value?.food?.id == 3 ? saladItems : SandwitchItems;

const showBreadDetails = (category) => {
    orderDetails.value.foodCategory = category;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        router.push({ name: orderDetails?.value?.food?.id == 3 ? "categoryItemForSalad" : "categoryItems" });
    }, 100);
};
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
            <div class="text-[24px] font-extrabold">{{orderDetails.food.name }}</div>
        </Card>

      <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.1 }"
          v-for="(item, index) in selectedItemsData"
          :key="index"
          @click="showBreadDetails(item)"
          class="relative"
        >
          <Card
            class="border border-green-600 ring-2 ring-green-600 ring-opacity-20 cursor-pointer"
          >
            <div class="flex items-center gap-5">
              <div>
                <img
                  :src="item.image"
                  alt="categories"
                  class="object-cover h-[100px] rounded-xl"
                />
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-black font-extrabold text-xl">{{
                  item.name
                }}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
