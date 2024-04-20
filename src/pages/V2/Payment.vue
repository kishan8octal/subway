  <script setup>
  import GooglePayButton from '../../components/GooglePay.vue';
  import HeaderLogo from '../../components/HeaderLogo.vue';
  import OrderDetails from '../../components/OrderDetails.vue';
  import { useStore } from 'vuex';
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Card from '../../components/Card.vue';
  import { ChevronRight } from "../../components/Icons/Index";
  import RazorpayPayment from '../../components/RazorpayPayment.vue';

  const router = useRouter();
  const store = useStore();
  const orderDetails = computed(() => store.state.orderDetails);
  const isDetailsShow = ref(false);
  const handleShowDetails = () => {
    isDetailsShow.value = true
};
const closeDetails = () => {
    console.log("click");
  isDetailsShow.value = false; // Hide the order details overlay
};
const paymentOptions = [
  { name: "Google Pay",value:'googlepay', id: 1 },
  { name: "Paypal",value:'paypal', id: 2 },
  { name: "Card", value:'card',id: 3 },
];

const handleConfiemPayment = (option)=>{
  orderDetails.value.payment = option;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        router.push({ name: 'confirmPayment' });
    }, 100)
}
  </script>
  <template>
    <section>
      <HeaderLogo />
      <div class="container mx-auto py-10 px-5 mt-14">
          <!-- <button
              class="relative mb-14 cursor-pointer py-3 px-[25px] rounded-lg  [border:none] w-full bg-[transparent] [background:linear-gradient(98.81deg,_#53e88b,_#15be77)]">
              <div @click="handleShowDetails()"
                  class="relative text-[1.2rem] font-semibold uppercase viga-regular text-white">
                  Show Selected Order Details
              </div>
          </button> -->
          <!-- <OrderDetails @close="closeDetails" v-if="isDetailsShow" :isDetailsShow="isDetailsShow" :orderDetails="orderDetails" /> -->
          <div class="z-20 relative bottom-3 flex justify-center gap-3 lobster-regular text-center">
              <!-- <h1 class="text-black text-3xl">Chips</h1> -->
              <span class="text-white uppercase text-[3rem]">
                  checkout
              </span>
          </div>
          <div class="relative mt-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <h1 class="text-center text-black text-3xl viga-regular">Payment Method</h1>
              <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-10 px-6 mt-10">
                <RazorpayPayment />
                <!-- v-for="option in paymentOptions" :key="option.id" -->
                <!-- <div 
                  class="py-4 px-5 flex items-center justify-between rounded-2xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                  @click="handleConfiemPayment(option)">
                  <span class="text-xl viga-regular text-green-gradient">{{
                    option.name
                  }}</span>
                  <ChevronRight size="21" />
                </div> -->
                <!-- </div> -->
              </div>
          </div>
      </div>
  </section>
  </template>
  