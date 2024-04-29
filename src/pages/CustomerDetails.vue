  <script setup>
  import HeaderLogo from '../components/HeaderLogo.vue';
  import RazorpayPayment from '../components/RazorpayPayment.vue';
  import InvoicePdf from '../components/InvoicePdf.vue';
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
          <div class="container h-full mx-auto py-10 mt-24 px-5 relative z-10">
<!--              <RazorpayPayment :customer="customer"/>-->
              <InvoicePdf :orderDetails="orderDetails" />
          </div>
      </section>
  </template>
  
