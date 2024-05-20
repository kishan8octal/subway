<script setup>
    import HeaderLogo from '../components/HeaderLogo.vue';
    import RazorpayPayment from '../components/RazorpayPayment.vue';
    import InvoicePdf from '../components/InvoicePdf.vue';
    import Card from '../components/Card.vue';
    import Button from '../components/Button.vue';
    import { useStore } from 'vuex';
    import { computed, ref } from 'vue';
    import { useRouter, onBeforeRouteLeave } from 'vue-router';
    import iziToast from 'izitoast';

    const router = useRouter();
    const store = useStore();
    const orderDetails = computed(() => store.state.orderDetails);
    const isOrderSend = ref(!(!!orderDetails.value));
    const forceNavigation = ref(false)
    
    onBeforeRouteLeave((to, from, next) => {
        next(forceNavigation.value);
    });
        
    const handleOrderSend = () => {
        // if (response === 'OK') {
            iziToast.success({
                position: 'topRight',
                message: 'check you mail for review Order',
            });
            store.dispatch("storeData", null);
            isOrderSend.value = true;
        // }
    };
    
    const handleBackToHome = () => {
        forceNavigation.value = true;
        setTimeout(() => {
            router.push({ name: "index" });
            forceNavigation.value = true;
        }, 100);
    }
</script>
<template>
    <section>
        <HeaderLogo :isBackButton="false" :isShowOrderDetails="!isOrderSend"/>
        <div class="container h-full mx-auto py-10 mt-24 px-5 relative z-10">
            <Card v-if="isOrderSend">
                <h1
                class="text-xl">
                    Order Send successfully Please check mail temporary we accept cash only.</h1>
                <Button variant="primary" class="mt-5" @click="handleBackToHome">
                    Back to Home
                </Button>
            </Card>
            <!--              <RazorpayPayment :customer="customer"/>-->
            <InvoicePdf v-else @orderSend="handleOrderSend" :orderDetails="orderDetails"/>
        </div>
    </section>
</template>
  
