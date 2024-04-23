  <script setup>
  import HeaderLogo from '../components/HeaderLogo.vue';
  import OrderDetails from '../components/OrderDetails.vue';
  import Input from '../components/Input.vue';
  import RazorpayPayment from '../components/RazorpayPayment.vue';
  // import InvoicePdf from '../components/InvoicePdf.vue';
  // import OrderDetails from '../../components/';
  import { useStore } from 'vuex';
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const store = useStore();
  const orderDetails = computed(() => store.state.orderDetails);
  const isDetailsShow = ref(false);
  const handleShowDetails = () => {
    isDetailsShow.value = true
};
  const customer = ref({
      name: '',
      contact: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip_code: '',
  });
  
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
<!--      <HeaderLogo />-->
      <div class="container mx-auto py-10 px-5 relative z-10">
              <div class="mx-auto w-full max-w-[550px] bg-white">
<!--                  <InvoicePdf />-->
                  <div>
                      <div class="text-center text-lg my-2 font-semibold">Customer Details</div>
                      <div class="mb-5">
                          <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                              Full Name
                          </label>
                          <input
                                  v-model="customer.name"
                                  type="text" name="name" id="name" placeholder="Full Name"
                                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                      </div>
                      <div class="mb-5">
                          <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                              Phone Number
                          </label>
                          <input
                                  v-model="customer.contact"
                                  type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                      </div>
                      <div class="mb-5">
                          <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                              Email Address
                          </label>
                          <input
                                  v-model="customer.email"
                                  type="email" name="email" id="email" placeholder="Enter your email"
                                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                      </div>

                      <div class="mb-5 pt-3">
                          <label class="mb-3 block text-base font-medium text-[#07074D]">
                              Address Details
                          </label>
                          <textarea
                                  v-model="customer.address"
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"  cols="30" rows="5" placeholder="Enter Address"></textarea>
                          <div class="-mx-3 mt-3 flex flex-wrap">
                              <div class="w-full px-3 sm:w-1/2">
                                  <div class="mb-5">
                                      <input
                                              v-model="customer.city"
                                              type="text" name="city" id="city" placeholder="Enter city"
                                             class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                  </div>
                              </div>
                              <div class="w-full px-3 sm:w-1/2">
                                  <div class="mb-5">
                                      <input
                                              v-model="customer.state"
                                              type="text" name="state" id="state" placeholder="Enter state"
                                             class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                  </div>
                              </div>
                              <div class="w-full px-3 sm:w-1/2">
                                  <div class="mb-5">
                                      <input
                                              v-model="customer.zip_code"
                                              type="text" name="post-code" id="post-code" placeholder="Post Code"
                                             class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div>
                          <RazorpayPayment :customer="customer" />
                      </div>
                  </div>
              </div>
          </div>
          <div class="z-20 relative bottom-3 flex justify-center gap-3 lobster-regular text-center">
              <!-- <h1 class="text-black text-3xl">Chips</h1> -->
<!--              <span class="text-white uppercase text-[3rem]">-->
<!--                  checkout-->
<!--              </span>-->
          </div>
<!--          <div class="relative mt-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">-->
<!--              <h1 class="text-center text-black text-3xl viga-regular">Payment Method</h1>-->
<!--              <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-10 px-6 mt-10">-->
<!--                <RazorpayPayment />-->
<!--              </div>-->
<!--          </div>-->
<!--      </div>-->
  </section>
  </template>
  
