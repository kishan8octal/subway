<script setup>
import { useRouter } from "vue-router";
import HeaderLogo from "../../components/HeaderLogo.vue";
import OrderDetails from "../../components/OrderDetails.vue";
import { sandwitchFoosItems } from '../../components/helper';
import { useStore } from "vuex";
import { computed } from "vue";

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);

const handleNavigate = (food) => {
  orderDetails.value.food = food;
  store.dispatch("storeData", orderDetails.value);
  setTimeout(() => {
    router.push({ name: "foodsCategoriesV2" });
  }, 100);
};
</script>
<template>
  <section>
    <HeaderLogo />
     <video src="../../assets/2.mp4" autoplay="{true}" loop muted 
    class="fixed top-[5px] invert mix-blend-color-burn z-0" />
    <div class="p-5 z-50">
      <div class="sm:max-w-7xl mx-auto p-5 sm:p-20">
          <OrderDetails :orderDetails="orderDetails" />
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10"
        >
          <div
            class="rounded-3xl bg-white z-10 shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]"
            v-for="(card, index) in sandwitchFoosItems"
            :key="index"
            @click="handleNavigate(card)"
          >
            <img
              :src="card.image"
              alt="img"
              class="rounded-t-3xl object-cover h-[150px] w-full"
            />
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
