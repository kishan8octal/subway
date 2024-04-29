<script setup>
import { useRouter } from "vue-router";
import HeaderLogo from "../components/HeaderLogo.vue";
import { sandwitchFoosItems, handleSendMail } from '../components/helper';
import { useStore } from "vuex";
import { computed, ref } from 'vue';

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);
const isLoading = ref(false);

const handleNavigate = (food) => {
    isLoading.value = true;
  orderDetails.value.food = food;
  store.dispatch("storeData", orderDetails.value);
  setTimeout(() => {
      isLoading.value = false;
      router.push({ name: "foodsCategories" });
  }, 100);
};
</script>
<template>
  <section>
    <HeaderLogo :isLoading="isLoading" />
    <div class="container mx-auto p-5 z-50 mt-24">
      <div class="sm:max-w-7xl mx-auto p-5 sm:p-20">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10">
          <div class="rounded-3xl bg-white z-10 shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]"
            v-for="(card, index) in sandwitchFoosItems" :key="index" @click="handleNavigate(card)">
            <img :src="card.image" alt="img" class="rounded-t-3xl object-cover h-[150px] w-full" />
            <div class="p-4 text-center rounded-lg">
              <p class="text-[2rem] text-green-gradient font-extrabold uppercase mt-5 lobster-regular">
                {{ card.name }}
              </p>
              <p class="text-[1.5rem] mt-5 font-thin text-black viga-regular">
                {{ card.dec }}
              </p>
              <span class="text-[1.5rem] flex justify-center gap-2 font-extrabold text-red-800 viga-regular">{{
                card.price }}
                <p class="text-black">With Tax</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.overlay {
  background-image: linear-gradient(to top, #222 0.33%, rgba(34, 34, 34, 0) 130%);
}
</style>
