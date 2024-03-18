<script setup>
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import { useRouter } from 'vue-router';

const router = useRouter();


</script>
<template>
    <section class="h-screen">
            <Button variant="primary" class="mt-5 mx-3 text-white font-bold" @click="router.back()">Back</Button>
        <div class="container mx-auto my-10 p-2">
            <Card class="border border-green-600 ring-2 ring-green-600 ring-opacity-20">
                <div class="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                        <Button variant="secondary">
                            Toasted                            
                        </Button>
                        <Button variant="secondary">
                      Not toasted
                    </Button>
                </div>
            </Card>
        </div>
    </section>
</template>
