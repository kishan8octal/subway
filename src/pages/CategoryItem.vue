<script setup>
import Button from "../components/Button.vue";
import { useRoute, useRouter } from "vue-router";
import cheeseWhiteAmerican from "../assets/cheeseWhiteAmerican.avif";
import cheesePepperJack from "../assets/cheesePepperJack.avif";
import cheeseProvolone from "../assets/cheeseProvolone.avif";
import cheeseMontereyCheddarShredded from "../assets/cheeseMontereyCheddarShredded.avif";
import Card from "../components/Card.vue";
import { useStore } from 'vuex';
import { computed } from 'vue';
const router = useRouter();
const { params } = useRoute();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);

const itemVariants = [
  {
    id: 1,
    name: "American Cheese",
    des: "80 Cals",
    image: cheeseWhiteAmerican,
  },
  {
    id: 2,
    name: "Pepper Jack",
    des: "100 Cals",
    image: cheesePepperJack,
  },
  {
    id: 3,
    name: "Provolone",
    des: "100 Cals",
    image: cheeseProvolone,
  },
  {
    id: 4,
    name: "Monterey Cheddar",
    des: "110 Cals",
    image: cheeseMontereyCheddarShredded,
  },
  {
    id: 5,
    name: "No Cheese",
  },
];
const showToastedDetails = (item) => {
    orderDetails.value.selectedCategoryItem = item;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        router.push({ name: params.food == 3 ? "veggiesSectionForSalad" : "toastedSection"});
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
        <div>Your branch :- {{orderDetails?.branch?.name }}</div>
        <div> Your Delivery Time :- {{orderDetails?.deliveryTime }}</div>
        <div> Your Food :- {{orderDetails?.food?.name }}</div>
        <div> Your Food Category :- {{orderDetails?.foodCategory?.name }}</div>
        <div> Your Food Category Item:- {{orderDetails?.categoryItem?.name }}</div>
      </Card>
      <div class="text-green-600  font-extrabold text-xl my-5">
        Cheese
        <p class="text-[16px] font-extralight">Select up to 1</p>
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
          v-for="(item, index) in itemVariants"
          :key="index"
          @click="showToastedDetails(item)"
        >
          <Card
            class="border border-green-600 ring-2 ring-green-600 ring-opacity-20 cursor-pointer"
          >
            <div class="flex items-center gap-5">
              <img v-if="item.image"
                :src="item.image"
                alt="cheese"
                class="object-cover h-[50px] w-[50px] rounded-xl"
              />
              <div class="flex flex-col">
                <span class="text-black font-bold">
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

<style scoped></style>
