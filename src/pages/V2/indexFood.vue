<script setup>
import Button from "../../components/Button.vue";
import Card from "../../components/Card.vue";
import { useRouter } from "vue-router";
import sandwiches from "../../assets/allSandWiches.avif";
import saladImg from "../../assets/salad.avif";
import { useStore } from "vuex";
import { computed } from "vue";

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);

const cards = [
  {
    id: 1,
    name: "classic sandwiches",
    dec: "6 Inch Sandwich + Chips + Soda =",
    price: "$10.00",
    image: sandwiches,
  },
  {
    id: 2,
    name: "classic sandwiches",
    dec: "Footlong Sandwich + Chips + Soda =",
    price: "$15.00",
    image: sandwiches,
  },
  {
    id: 3,
    name: "salad",
    dec: "Salad + water bottle =",
    price: "$10.00",
    image: saladImg,
  },
];
const handleNavigate = (food) => {
  orderDetails.value.food = food;
  store.dispatch("storeData", orderDetails.value);
  setTimeout(() => {
    router.push({ name: "foodCategories" });
  }, 100);
};
</script>
<template>
  <section>
    <Button
      variant="primary"
      class="mt-5 my-10 mx-3 text-white font-bold"
      @click="router.back()"
      >Back
    </Button>
    <img
      src="../../assets/PatternBackground.png"
      alt="backgroundPettarn"
      class="absolute top-0 left-0 pointer-events-none"
    />
    <div class="p-5 z-50">
      <div class="sm:max-w-7xl mx-auto p-5 sm:p-20">
        <h1
          class="text-center text-2xl text-green-gradient font-extrabold uppercase mb-5 viga-regular"
        >
          Order Details
        </h1>
        <Card
          class="rounded-3xl bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)] mb-10"
        >
          <div class="flex gap-5 items-center">
            <img src="../../assets/IconLocation.png" alt="location" class="h-[35px]" />
            <div class="details text-black viga-regular font-extrabold">
              <div class="flex gap-2">Your branch | <p class="text-[#7DA640]">{{ orderDetails.branch.name }}</p></div>
              <div class="flex gap-2">Your Delivery Time | <p class="text-[#7DA640]">{{ orderDetails.deliveryTime }}</p></div>
            </div>
          </div>
        </Card>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10"
        >
          <div
            class="rounded-3xl bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]"
            v-for="(card, index) in cards"
            :key="index"
            @click="handleNavigate(card)"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :hovered="{ scale: 1.1 }"
          >
            <!-- <div class="rounded-full mx-auto h-[200px] w-[200px]"> -->
            <img
              :src="card.image"
              alt="img"
              class="rounded-t-3xl object-cover h-[150px] w-full"
            />
            <!-- </div> -->
            <div class="p-4 text-center rounded-lg">
              <p
                class="text-[2.5rem] text-green-gradient font-extrabold uppercase mt-5 lobster-regular"
              >
                {{ card.name }}
              </p>
              <p class="text-[1rem] mt-5 font-thin text-black viga-regular">
                {{ card.dec }}
              </p>
              <span
                class="text-[1.5rem] flex justify-center gap-2 font-extrabold text-[#7DA640] viga-regular"
                >{{ card.price }}
                <p class="text-black">With Tax</p></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
<!-- .card-main{
    content: "";
    position: absolute;
    opacity: 0;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    z-index: 1;
    background-image: linear-gradient(to top, #222 0.33%, rgba(34, 34, 34, 0) 101%);
} -->
