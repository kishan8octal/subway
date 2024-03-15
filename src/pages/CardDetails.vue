<script setup>
    import Button from '../components/Button.vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();

</script>

<template>
        <section>
        <Button class="mt-5 mx-3 text-white font-bold" @click="router.back()">Back</Button>
                <div class="container mx-auto py-10 mt-36">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-gray-900 h-80 w-80 rounded-xl relative">
                            <div>
                                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg" alt="" 
                                class="rounded-full h-48 w-48 absolute top-[-90px] left-[60px]">
                            </div>    
                            <div class="p-4 text-center mt-28">
                                <h1 class="text-white text-xl">Title qqqq</h1>
                                <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, id.</p>
                            </div>                        
                        </div>
                        <div class="bg-[#1F1D2B] h-80 w-80 rounded-xl relative">
                            <div>
                                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg" alt="" 
                                class="rounded-full h-48 w-48 absolute top-[-90px] left-[60px]">
                            </div>    
                            <div class="p-4 text-center mt-28">
                                <h1 class="text-white text-xl">Title qqqq</h1>
                                <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, id.</p>
                            </div>                        
                        </div>
                        <div class="bg-[#1F1D2B] h-80 w-80 rounded-xl relative">
                            <div>
                                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg" alt="" 
                                class="rounded-full h-48 w-48 absolute top-[-90px] left-[60px]">
                            </div>    
                            <div class="p-4 text-center mt-28">
                                <h1 class="text-white text-xl">Title qqqq</h1>
                                <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, id.</p>
                            </div>                        
                        </div>
                        <div class="bg-[#1F1D2B] h-80 w-80 rounded-xl relative">
                            <div>
                                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg" alt="" 
                                class="rounded-full h-48 w-48 absolute top-[-90px] left-[60px]">
                            </div>    
                            <div class="p-4 text-center mt-28">
                                <h1 class="text-white text-xl">Title qqqq</h1>
                                <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, id.</p>
                            </div>                        
                        </div>
                    </div>
                </div>
        </section>      
</template>

<style>

</style>
