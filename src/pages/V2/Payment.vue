  <script setup>
  import HeaderLogo from '../../components/HeaderLogo.vue';
  import OrderDetails from '../../components/OrderDetails.vue';
  // import OrderDetails from '../../components/';
  import { useStore } from 'vuex';
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
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
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
              class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        
              <div class="max-w-md mx-auto">
                <div>
                  <h1 class="text-2xl font-semibold">Enter Customer Details</h1>
                </div>
                <div class="divide-y divide-gray-200">
                  <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  
                    <div class="relative">
                      <button class="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
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
              </div>
          </div>
      </div>
  </section>
  </template>
  