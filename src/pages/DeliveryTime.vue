<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { computed } from 'vue';
    import Button from '../components/Button.vue';
    import Card from '../components/Card.vue';

    const { params } = useRoute();
    const router = useRouter();
    const currentPlan = params.plan;

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
        <div class="flex items-center h-screen p-5 z-50">
            <Card class="shadow-lg container mx-auto">
                <div class="flex flex-col gap-5 items-center sm:items-start">
                    <div class="text-green-600 font-mono font-bold text-lg">Select Your Delivery Time</div>
                    <div class="font-bold text-gray-800">Deliver At</div>
                    <div class="flex gap-3 items-center font-bold">
                        <router-link :to="{ name: 'foods', params: { time: startTime }}">
                            <Button>
                                {{startTime}} AM
                            </Button>
                        </router-link>

                        <span>OR</span>
                        <router-link :to="{ name: 'foods', params: { time: endTime }}">
                            <Button>{{endTime}} PM</Button>
                        </router-link>
                    </div>
                </div>
            </Card>
        </div>
    </section>
</template>
