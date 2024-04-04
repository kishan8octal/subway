<script setup>
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import { useRoute, useRouter } from "vue-router";
import sauceMayonnaise from "../assets/sauceMayonnaise.avif";
import sauceMustard from "../assets/sauceMustard.avif";
import sauceHoneyMust_Sauce_OVERHEAD2_ from "../assets/sauceHoneyMust_Sauce_OVERHEAD2_.avif";
import sauceBuffalo from "../assets/sauceBuffalo.avif";
import sauceSweetOnion from "../assets/sauceSweetOnion.avif";
import saucePeppercornRanch from "../assets/saucePeppercornRanch.avif";
import sauceChipotle from "../assets/sauceChipotle.avif";
import sauceRostedGarlicAioli from "../assets/sauceRostedGarlicAioli.avif";
import sauceParmVinaigrette from "../assets/sauceParmVinaigrette.avif";
import sauceOil from "../assets/sauceOil.avif";
import sauceRedWineVinegar from "../assets/sauceRedWineVinegar.avif";
import { useStore } from 'vuex';
import { computed } from 'vue';

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);

const SaucesCard = [
  {
    id: 1,
    name: "Regular Mayonnaise",
    des: "200 Cals",
    image: sauceMayonnaise
  },
  {
    id: 2,
    name: "Yellow Mustard",
    des: "20 Cals",
    image: sauceMustard
  },
  {
    id: 3,
    name: "Honey  Mustard",
    des: "120 Cals",
    image: sauceHoneyMust_Sauce_OVERHEAD2_
  },
  {
    id: 4,
    name: "Buffalo Sauce",
    des: "10 Cals",
    image: sauceBuffalo
  },
  {
    id: 5,
    name: "Sweet Onion Teriyaki",
    des: "60 Cals",
    image: sauceSweetOnion
  },
  {
    id: 6,
    name: "Peppercorn Ranch",
    des: "160 Cals",
    image: saucePeppercornRanch
  },
  {
    id: 7,
    name: "Baja Chipotle",
    des: "140 Cals",
    image: sauceChipotle
  },
  {
    id: 8,
    name: "Roasted Garlic Aioli",
    des: "160 Cals",
    image: sauceRostedGarlicAioli
  },
  {
    id: 9,
    name: "MVP Parmesan Vinaigrette",
    des: "120 Cals",
    image: sauceParmVinaigrette
  },
  {
    id: 10,
    name: "Oil",
    des: "90 Cals",
    image: sauceOil
  },
  {
    id: 11,
    name: "Red Wine Vinegar",
    des: "0 Cals",
    image: sauceRedWineVinegar
  },
];
const navigateToChips=(item)=>{
    orderDetails.value.souces = item;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        router.push({ name: 'chipsSection' });
    }, 300);
}
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
      <div class="text-green-600 font-mono font-bold text-xl my-5">
        Select The Sauces
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.1 }"
          v-for="(item, index) in  SaucesCard"
          :key="index"
          class="relative"
          @click="navigateToChips(item)"
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
                <span class="text-gray-950 font-semibold text-xl">{{
                  item.name
                }}</span>
                <span class="text-gray-700 text-lg">{{ item.des }}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
