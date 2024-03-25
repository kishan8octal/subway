<script setup>
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const { params } = useRoute();

const handleToasted=(id)=>{
    router.push({
        name: 'veggiesSection',
        params: {
            branch:params.branch,
            time:params.time,
            food:params.food,
            category:params.category,
            item: params.item,
            variant: params.id,
            toast:id,
        },
    });
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
                        <Button variant="secondary" @click="handleToasted(1)">
                            Toasted                            
                        </Button>
                        <Button variant="secondary" @click="handleToasted(2)">
                      Not toasted
                    </Button>
                </div>
            </Card>
        </div>
    </section>
</template>
