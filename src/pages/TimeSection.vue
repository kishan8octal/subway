<script setup>
    import { useRoute,useRouter } from 'vue-router';
    import { computed } from 'vue';
    import Button from '../components/Button.vue';

    const { params } = useRoute();
    const router = useRouter()
    const currentPlan = params.plan;

    const startTime =  computed(() => {
        return {
            1:'11:00', 
            2:'11:15', 
            3:'11:30', 
            4:'11:45', 
        }[currentPlan]
    });

    const endTime =  computed(() => {
        return {
            1:'1:00', 
            2:'1:15', 
            3:'1:30', 
            4:'1:45', 
        }[currentPlan]
    });

</script>
<template>
    <section>
            <Button class="mt-5 mx-3 text-white font-bold" @click="router.back()">Back</Button>
        <div class="flex items-center h-screen p-5">
            <div class="container mx-auto py-10 bg-[#1f1d2b] p-5 shadow-sm shadow-[#EA7C69] rounded-xl  border border-[#EA7C69] ring-2 ring-[#EA7C69] ring-opacity-30">
                <div class="flex flex-col gap-5 items-center sm:items-start">
                    <div class="text-white font-mono font-bold text-lg">Select Your Delivery Time</div>
                    <div class="text-white font-bold">Deliver At</div>
                    <div class="flex gap-3 items-center text-white font-bold">
                        <router-link to="/card-section">
                            <Button>
                                {{startTime}} AM
                            </Button>
                        </router-link>

                        <span>OR</span>
                        <Button>{{endTime}} PM</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
