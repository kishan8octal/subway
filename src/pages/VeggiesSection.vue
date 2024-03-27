<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import { useRouter } from "vue-router";
import RadioGroup from '../components/RadioGroup.vue';
import veggieLettuce_6in from "../assets/veggieLettuce_6in.avif";
import veggieTomato_6in from "../assets/veggieTomato_6in.avif";
import veggieOnion_6in from "../assets/veggieOnion_6in.avif";
import veggieSpinach_6in from "../assets/veggieSpinach_6in.avif";
import veggieCucumber_6in from "../assets/veggieCucumber_6in.avif";
import veggiePickle_6in from "../assets/veggiePickle_6in.avif";
import veggieGreenPepper_6in from "../assets/veggieGreenPepper_6in.avif";
import veggieBlkOlives_6in from "../assets/veggieBlkOlives_6in.avif";
import veggieJalapeno_6in from "../assets/veggieJalapeno_6in.avif";
import veggieBananaPeppers_6in from "../assets/veggieBananaPeppers_6in.avif";
const router = useRouter();
const data = [
  {
    id: 1,
    name: "Lettuce",
    des: "5 Cals",
    image: veggieLettuce_6in
  },
  {
    id: 2,
    name: "Tomatoes",
    des: "15 Cals",
    image: veggieTomato_6in
  },
  {
    id: 3,
    name: "Red Onions",
    des: "5 Cals",
    image: veggieOnion_6in
  },
  {
    id: 4,
    name: "Spinach",
    des: "0 Cals",
    image: veggieSpinach_6in
  },
  {
    id: 5,
    name: "Cucumbers",
    des: "0 Cals",
    image: veggieCucumber_6in
  },
  {
    id: 6,
    name: "Pickles",
    des: "0 Cals",
    image: veggiePickle_6in
  },
  {
    id: 7,
    name: "Green Peppers",
    des: "0 Cals",
    image: veggieGreenPepper_6in
  },
  {
    id: 8,
    name: "Black Olives",
    des: "5 Cals",
    image: veggieBlkOlives_6in
  },
  {
    id: 9,
    name: "Jalapenos",
    des: "0 Cals",
    image: veggieJalapeno_6in
  },
  {
    id: 10,
    name: "Banana Peppers",
    des: "0 Cals",
    image: veggieBananaPeppers_6in
  },
];

const isSelectedItems = ref([]);

isSelectedItems.value = data.map(item => {
    return {
        id: item.id,
        value: [
            { id:1, value: false },
            { id:2, value: false },
            { id:3, value: false },
        ],
    };
});
const VeggiesCard = ref(data);
const navigateToSauces=(id)=>{
    router.push({
        name: 'saucesSection',
        params: {
          veggies:id,
        },
    });
}

const handelRemoveCard = (id) => {
  VeggiesCard.value = VeggiesCard.value.filter(item => item.id != id);
}
const handleVagiesItem = (id, selectedValue) => {
    isSelectedItems.value = isSelectedItems.value.filter(item => {
        if (item.id == id){
            console.error(Object.keys(item.value).includes(selectedValue));
            item.value[selectedValue] = !item.value[selectedValue];
        }
        return item;
    });
}
const vaggiesOptions = [
    { name: 'Less', id: 1 },
    { name: 'Regular', id: 2 },
    { name: 'More', id: 3 },
];


</script>
<style scoped>
    .radio input ~ label {
       @apply bg-gray-100 p-2 text-gray-900
    }
    .radio input:checked ~ label {
        @apply bg-primary text-white
    }
</style>
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
        Select veggies
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.1 }"
          v-for="(item, index) in VeggiesCard"
          :key="index"
          class="relative"
          @click="navigateToSauces(item.id)"
        >
          <Card
            class="border border-green-600 ring-2 ring-green-600 ring-opacity-20 cursor-pointer"
          >
            <Button
              class="text-md absolute right-2 top-2"
              @click.stop="handelRemoveCard(item.id)"
              variant="secondaryDestructive"
              >Remove</Button
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
            <div class="flex gap-5 mt-5 justify-center" @click.stop="">
                <div class="inline-block radio">
                    <input :name="`answer-${index}`" type="radio" :id="`B1-${index}`" hidden="hidden" value="B" 
                           @click.stop="handleVagiesItem(item.id,1)"/>
                    <label :for="`B1-${index}`"
                           class="px-2 py-1 rounded-lg cursor-pointer flex justify-center items-center
                          ">Less</label>
                </div>
                <div class="inline-block radio">
                    <input :name="`answer-${index}`" type="radio" :id="`C1-${index}`" hidden="hidden" value="C" 
                           @click.stop="handleVagiesItem(item.id,1)"/>
                    <label :for="`C1-${index}`"
                            class="px-2 py-1 rounded-lg cursor-pointer flex justify-center items-center
                            ">Regular</label>
                </div>
                <div class="inline-block radio">
                    <input :name="`answer-${index}`" type="radio" :id="`D1-${index}`" hidden="hidden" value="D" 
                           @click.stop="handleVagiesItem(item.id,1)"/>
                    <label :for="`D1-${index}`"
                            class="px-2 py-1 rounded-lg cursor-pointer flex justify-center 
                            items-center">More</label>
                </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
