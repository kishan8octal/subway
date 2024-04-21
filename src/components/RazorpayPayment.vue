<template>
  <div>
    <button @click="openPaymentModal">Pay with Razorpay</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const openPaymentModal = () => {
  const options = {
    key: 'rzp_test_KkhEv8cJBXnN3V', // Replace with your actual Razorpay key
    amount: 100, // Amount in paise (100 paise = 1 rupee)
    currency: 'INR', // Change currency as per your requirements
    name: 'Subway',
    description: 'Product Purchase',
    prefill: {
      name: 'Kishan chauhan',
      email: 'kishan.infyom@.com',
      contact: '6354891916'
    },
    theme: {
      color: '#3399cc'
    },
    handler: function(response) {
      console.log(response);
      // Handle successful payment response here
    }
  };

  const razorpayInstance = new Razorpay(options);
  razorpayInstance.open();
};
</script>

<style scoped>
/* Add any custom styles for the payment form here */
</style>
