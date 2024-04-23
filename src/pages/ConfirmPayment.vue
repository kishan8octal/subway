<script setup>
import HeaderLogo from '../components/HeaderLogo.vue';
import OrderDetails from '../components/OrderDetails.vue';
import { useStore } from 'vuex';
import GooglePayButton from '../components/GooglePay.vue';
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);
const isDetailsShow = ref(false);
const handleShowDetails = () => {
    isDetailsShow.value = true
};

onMounted(async () => {
  try {
    const paypal = await loadScript({ "client-id": "AeXw_ZRHUMu5wurm-dmECgfoK4bcLu3lea1llCGEXUKMPXYYtEz98xTJkDepBSzAYVWDjC0B3GDctNRe" });
    paypal.Buttons().render("#paypalButton");
  } catch (err) {
    console.error(err);
  }
});
console.log("orderDetails",orderDetails.value);
const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890', // Your merchant ID
      merchantName: 'Example Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '1.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  };
const closeDetails = () => {
    console.log("click");
  isDetailsShow.value = false; // Hide the order details overlay
};
</script>
<template>
    <section>
        <HeaderLogo />
        <div class="container mx-auto py-10 px-5 mt-14">
            <button
            class="relative mb-14 cursor-pointer py-3 px-[25px] rounded-lg  [border:none] w-full bg-[transparent] [background:linear-gradient(98.81deg,_#53e88b,_#15be77)]">
            <div @click="handleShowDetails()"
                class="relative text-[1.2rem] font-semibold uppercase viga-regular text-white">
                Order Details
            </div>
        </button>
        <OrderDetails @close="closeDetails" v-if="isDetailsShow" :isDetailsShow="isDetailsShow" :orderDetails="orderDetails" />
        <div class="z-20 relative bottom-3 flex flex-col justify-center gap-10 lobster-regular text-center">
            <span class="text-white text-3xl">
                Proceed to payment
            </span>
            <div v-if="orderDetails.payment.value === 'googlepay'">
                <GooglePayButton
                  :paymentRequest="paymentRequest"
                  buttonType="long"
                />
            </div>
            <div v-if="orderDetails.payment.value === 'paypal' | orderDetails.payment.value === 'card'" id="paypalButton"></div>
        </div>
            <!-- <div class="mt-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div class="relative">

                    <Card class="bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)]">
                        <div class="flex gap-5 justify-center items-center">
                            <img :src="orderDetails.food.image" class="h-[70px] rounded-lg w-[100px]" />
                            <div class="flex flex-col viga-regular text-[20px] text-green-gradient">
                                <span>
                                    {{ orderDetails.food.dec }}
                                </span>
                                <span class="text-red-950 font-extrabold text-[24px]">
                                    {{ orderDetails.food.price }}
                                </span>
                            </div>
                        </div>
                        <hr class="h-px my-[12px] bg-gray-300 border-0 dark:bg-gray-700">
                        <div class="flex items-center gap-5">
                            <img :src="orderDetails.foodCategory.image" class="h-[70px] rounded-lg w-[100px]" />
                            <div class="flex flex-col viga-regular text-[20px] text-green-gradient">
                                <span>
                                    {{ orderDetails.foodCategory.name }}
                                </span>
                            </div>
                        </div>
                        <hr class="h-px my-[12px] bg-gray-300 border-0 dark:bg-gray-700">
                            <div class="flex flex-col viga-regular text-[20px] text-green-gradient">
                                <span class="text-center">
                                    {{ orderDetails.categoryItem.name }}
                                </span>
                            </div>
                            <hr class="h-px my-[12px] bg-gray-300 border-0 dark:bg-gray-700">
                            <div class="flex flex-col viga-regular text-[20px] text-green-gradient">
                                <span class="text-center">
                                    {{ orderDetails.categoryItems.name }}
                                </span>
                            </div>
                            <hr class="h-px my-[12px] bg-gray-300 border-0 dark:bg-gray-700">
                            <div class="flex flex-col viga-regular text-[20px] text-green-gradient">
                                <span class="text-center">
                                    {{ orderDetails.toasted.name }}
                                </span>
                            </div>
                    </card>
                </div>
            </div> -->
        </div>
    </section>
</template>
