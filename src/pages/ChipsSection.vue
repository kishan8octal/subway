<script setup>
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import {  useRouter } from "vue-router";
import chipsDoritosNachoCheese from "../assets/chipsDoritosNachoCheese.avif";
import chipsLaysClassic from "../assets/chipsLaysClassic.avif";


const router = useRouter();
const chipsCard = [
    {
    id: 1,
    name: "DORITOS Nacho Cheese",
    image: chipsDoritosNachoCheese
  },
  {
    id: 2,
    name: "LAY'S Classic",
    image: chipsLaysClassic
  }
]
const navigateToDrink=(id)=>{
    router.push({
        name: 'drinkSection',
        params: {
          veggies:id,
        },
    });
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
        Select The Chips
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.1 }"
          v-for="(item, index) in  chipsCard"
          :key="index"
          class="relative"
          @click="navigateToDrink(item.id)"
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
