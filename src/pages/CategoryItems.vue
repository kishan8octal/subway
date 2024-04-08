<script setup>
import Button from "../components/Button.vue";
import { useRouter } from "vue-router";
import breadGrainWheat from "../assets/breadGrainWheat.avif";
import breadtalianWhite from "../assets/breadtalianWhite.avif";
import breadtalianHerbsCheese from "../assets/breadtalianHerbsCheese.avif";
import long_Black_Forest_Ham from "../assets/long_Black_Forest_Ham.avif";
import Card from "../components/Card.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);
console.log("orderDetails", orderDetails);
const sandwitchCategories = [
  {
    id: 1,
    name: "Hearty Multigrain",
    des: "200 Cals",
    image: breadGrainWheat,
  },
  {
    id: 2,
    name: "Artisan Italian",
    des: "200 Cals",
    image: breadtalianWhite,
  },
  {
    id: 3,
    name: "Italian Herbs & Cheese",
    des: "240 Cals",
    image: breadtalianHerbsCheese,
  },
];
const sandwitchCategoriesSecond = [
  {
    id: 1,
    name: "Hearty Multigrain",
    des: "400 Cals",
    image: breadGrainWheat,
  },
  {
    id: 2,
    name: "Artisan Italian",
    des: "400 Cals",
    image: breadtalianWhite,
  },
  {
    id: 3,
    name: "Italian Herbs & Cheese",
    des: "480 Cals",
    image: breadtalianHerbsCheese,
  },
];
const selectedCategoryItems =
  orderDetails.value?.food?.id == 1
    ? sandwitchCategories
    : sandwitchCategoriesSecond;
const showCheeseDetails = (item) => {
  orderDetails.value.categoryItem = item;
  store.dispatch("storeData", orderDetails.value);
  setTimeout(() => {
    router.push({ name: "categoryItem" });
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
        <h1 class="text-green-600 font-bold">Selected Order Details</h1>
        <div class="text-green-600 font-bold">{{ orderDetails.branch.name }}</div>
        <div class="text-green-600 font-bold">Delivery Time {{ orderDetails.deliveryTime }}</div>
        <div class="text-[24px] font-semibold">
          {{ orderDetails.food.name }}
        </div>
        <div class="flex flex-wrap">
          <div class="text-[24px] font-semibold mt-5">
            {{ orderDetails.foodCategory.name }}
          </div>
          <div class="mix-blend-darken">
            <img :src="orderDetails.foodCategory.image" alt="long" class="h-[250px] w-[300px]"/>
          </div>
        </div>
      </Card>
      <div class="text-green-600 font-extrabold text-xl my-5">
        Bread
        <p class="text-[16px] font-extralight">Select 1</p>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 sm:px-2"
      >
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.1 }"
          class="relative"
          v-for="(item, index) in selectedCategoryItems"
          :key="index"
          @click="showCheeseDetails(item)"
        >
          <Card
            class="border border-green-600 ring-2 ring-green-600 ring-opacity-20 cursor-pointer"
          >
            <div class="flex items-center gap-5">
              <img
                :src="item.image"
                alt="bread"
                class="object-cover h-[50px] w-[50px] rounded-xl"
              />
              <div class="flex flex-col">
                <span class="text-black font-extrabold">
                  {{ item.name }}
                </span>
                <span class="text-gray-500 text-[12px]">
                  {{ item.des }}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.food-logo {
  background-image: url(/src/assets/long_Black_Forest_Ham.avif);
  background-repeat: no-repeat;
  background-position: 100% 70%;
  background-size: cover;
}
</style>
