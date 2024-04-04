<script setup>
import Button from "../components/Button.vue";
import { useRouter } from "vue-router";
import breadGrainWheat from "../assets/breadGrainWheat.avif";
import breadtalianWhite from "../assets/breadtalianWhite.avif";
import breadtalianHerbsCheese from "../assets/breadtalianHerbsCheese.avif";
import saladImage from "../assets/salad.png";
import Card from "../components/Card.vue";
import { useStore } from 'vuex';
import { computed } from 'vue';

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);

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
const selectedCategoryItems = orderDetails.value?.food?.id == 1 ? sandwitchCategories : sandwitchCategoriesSecond;
const showCheeseDetails = (item) => {
    orderDetails.value.categoryItem = item;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        router.push({ name: 'categoryItem'});
    }, 300);
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
      <div class="text-green-600 font-mono font-bold text-xl my-5">
        Select the Bread
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
              <div class="text-gray-700 font-[cursive] flex flex-col">
                <span>
                  {{ item.name }}
                </span>
                <span class="text-slate-800">
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
