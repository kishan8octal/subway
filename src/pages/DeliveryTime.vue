<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { computed } from 'vue';
    import Button from '../components/Button.vue';
    import Card from '../components/Card.vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const router = useRouter();
    const currentPlan = 1;


    const orderDetails = computed(() => store.state.orderDetails);

    const startTime = computed(() => {
        return {
            1: '11:00',
            2: '11:15',
            3: '11:30',
            4: '11:45',
        }[currentPlan];
    });

    const endTime = computed(() => {
        return {
            1: '1:00',
            2: '1:15',
            3: '1:30',
            4: '1:45',
        }[currentPlan];
    });

</script>
<template>
    <section>
        <Button variant="primary" class="mt-5 mx-3 text-white font-bold" @click="router.back()">Back</Button>
        <div   v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
       class="flex items-center h-screen p-5 z-50">
            <Card 
            class="shadow-lg container mx-auto text-lg"
            >
                <div class="flex flex-col gap-5 items-center sm:items-start">
                    <div class="text-green-600 font-[cursive] font-bold text-lg">Select Your Delivery Time</div>
                    <div class="font-bold font-[cursive] text-gray-800">Deliver At {{orderDetails.branch.name}}</div>
                    <div class="flex gap-3 items-center font-bold my-5">
                        <!-- <router-link :to="{ name: 'foods', params: { branch:params.branch,time: startTime }}"> -->
                            <Button variant="primary" class="font-bold text-xl hover:scale-110 transition-transform duration-300">
                                {{startTime}} AM
                            </Button>
                        <!-- </router-link> -->

                        <span>OR</span>
                        <!-- <router-link :to="{ name: 'foods', params: { time: endTime,branch:params.branch }}"> -->
                            <Button  variant="primary" class="font-bold text-xl hover:scale-110 transition-transform duration-300">{{endTime}} PM</Button>
                        <!-- </router-link> -->
                    </div>
                </div>
            </Card>
        </div>
    </section>
</template>
