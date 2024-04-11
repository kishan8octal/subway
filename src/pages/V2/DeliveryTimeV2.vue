<script setup>
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { computed } from 'vue';

    const router = useRouter();
    const store = useStore();
    const orderDetails = computed(() => store.state.orderDetails);
    
    const startTime = computed(() => {
        return {
            1: '11:00',
            2: '11:15',
            3: '11:30',
            4: '11:45',
        }[orderDetails.value.branch.id];
    });

    const endTime = computed(() => {
        return {
            1: '1:00',
            2: '1:15',
            3: '1:30',
            4: '1:45',
        }[orderDetails.value.branch.id];
    });
    
    const address = computed(() => {
        return {
            3: '10080 Sandmeyer Ln Philadelphia, PA 19116',
            4: 'American Heritage Credit Union 2068 Red Lion Rd, Philadelphia, PA 19115',
        }[orderDetails.value.branch.id];
    });
    
    const handleDeliveryTime = (deliveryTime) => {
        orderDetails.value.deliveryTime = deliveryTime;
        store.dispatch('storeData', orderDetails.value);
        setTimeout(() => {
            router.push({ name: 'foodsV2' });
        }, 100);
    };
</script>
<template>
  <div
    class="w-full h-[812px] relative rounded-[20px] bg-white flex flex-col justify-start gap-[39px]"
  >
    <img
      class="mx-auto w-[408.5px] relative max-h-full shrink-0 max-w-[167%]"
      alt=""
      src="../../assets/Illustartion.png"
    />
      <div
              class="self-stretch flex-col items-start justify-start gap-[42px] text-center text-3xl text-gray font-bentonsans-bold"
      >
          <div
                  class="self-stretch flex flex-row items-start justify-start pt-0 pb-16 pr-px pl-0 relative gap-[20px]"
          >
              <div class="items-start justify-start py-0 px-4">
                  <h2
                          class="m-0 flex-1 relative leading-[131.02%] font-extrabold  text-green-gradient  whitespace-pre-wrap lobster-regular"
                  >
                      Select Your Delivery Time One
                  </h2>
                  <h2 class="mt-5 font-extrabold text-[#222222] viga-regular">
                      Delivery At {{address}}
                  </h2>
              </div>
          </div>
          <div class="flex justify-center gap-3">
              <button
                      class="cursor-pointer rounded-lg [border:none] py-3 px-[50px] bg-[transparent] [background:linear-gradient(98.81deg,_#53e88b,_#15be77)]"
              >
                  <div
                          @click="handleDeliveryTime(startTime)"
                          class="relative text-base viga-regular font-extrabold  text-white  min-w-[38px] z-[1]">
                      {{startTime}} AM
                  </div>
              </button>
              <button
                      @click="handleDeliveryTime(endTime)"
                      class="cursor-pointer rounded-lg [border:none] py-3 px-[50px] bg-[transparent] [background:linear-gradient(98.81deg,_#53e88b,_#15be77)]"
              >
                  <div 
                          class="relative text-base font-extrabold viga-regular text-white  min-w-[38px] z-[1]"
                  >
                      {{endTime}} PM
                  </div>
              </button>
          </div>
      </div>
  </div>
</template>
