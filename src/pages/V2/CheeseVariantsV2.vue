<script setup>
    import HeaderLogo from '../../components/HeaderLogo.vue';
    import OrderDetails from '../../components/OrderDetails.vue';
    import { cheeseVariants } from '../../components/helper';
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const store = useStore();
    const orderDetails = computed(() => store.state.orderDetails);
</script>
<template>
    <section>
        <HeaderLogo/>
        <div class="container mx-auto py-10 px-5">
            <OrderDetails :orderDetails="orderDetails"/>
        </div>
    </section>
</template>
