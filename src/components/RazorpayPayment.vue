<script setup>
    import { onMounted } from 'vue';
    import { handleSendMail } from './helper'

    const props = defineProps({
        customer: {
            type: Object,
            required: true,
        },
    });

    const openPaymentModal = () => {
        const options = {
            key: 'rzp_test_KkhEv8cJBXnN3V', // Replace with your actual Razorpay key
            amount: 100, // Amount in paise (100 paise = 1 rupee)
            currency: 'INR', // Change currency as per your requirements
            name: 'Subway',
            description: 'Product Purchase',
            prefill: {
                name: props.customer.name,
                email: props.customer.email,
                contact: props.customer.contact
            },
            theme: {
                color: '#3399cc'
            },
            handler: async function(response) {
                const body  = `Your Order Details <br>
                            name: ${props.customer.name}<br>
                            email: ${props.customer.email}<br>
                    `;
                await handleSendMail('kishan.infyom@gmail.com',props.customer.email,'Congratulations Your order has been confirm',body);
            }
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
    };
</script>
<template>
      <button
              @click="$emit('change')"  class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Make Payment
      </button>
</template>
