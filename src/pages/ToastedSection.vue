<script setup>
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

const router = useRouter();
const store = useStore();
const orderDetails = computed(() => store.state.orderDetails);

const handleToasted=(toast)=>{
    orderDetails.value.selectedToasted = toast;
    store.dispatch('storeData', orderDetails.value);
    setTimeout(() => {
        router.push({ name: 'veggiesSection' });
    }, 300);
}

</script>
<template>
    <section class="h-screen">
            <Button variant="primary" class="mt-5 mx-3 text-white font-bold" @click="router.back()">Back</Button>
        <div
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                class="container mx-auto my-10 p-2">
            <Card class="border border-green-600 ring-2 ring-green-600 ring-opacity-20">
                <div class="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                        <Button variant="secondary" @click="handleToasted({id: 1 ,name: 'toasted'})">
                            Toasted                            
                        </Button>
                        <Button variant="secondary" @click="handleToasted({id: 2 ,name: 'not toasted'})">
                      Not toasted
                    </Button>
                </div>
            </Card>
        </div>
    </section>
</template>
