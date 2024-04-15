<script setup>
    import Card from '../components/Card.vue';

    const props = defineProps({
        orderDetails: {
            type: Object,
            default: {},
        },
    });
    console.log("details",props);
</script>
<template>
    <h1 class="relative text-center text-2xl text-white font-extrabold uppercase mb-5 viga-regular">
        Order Details </h1>
    <Card class="relative rounded-3xl z-20 bg-white shadow-[0px_0px_50px_rgba(90,_108,_234,_0.2)] mb-10">
        <div class="flex gap-5 justify-center items-center">

            <div class="details text-black viga-regular">
                <div class="flex gap-5 justify-center items-center">
                    <img src="../assets/IconLocation.png" alt="location" class="h-[35px]"/>
                    <div>
                        <div class="flex gap-2 w-full" v-if="!!orderDetails?.branch?.name">
                            <div>Your branch |</div>
                            <p class="text-[#7DA640]">
                                {{ orderDetails?.branch?.name }} </p>
                        </div>
                        <div class="flex gap-2" v-if="!!orderDetails?.deliveryTime">
                            <div>Your Delivery Time |</div>
                            <p class="text-[#7DA640]">{{ orderDetails?.deliveryTime }}</p>
                        </div>
                    </div>
                </div>
                <div class="text-start mt-3 ml-14">
                    <p>Your Food Items Summary</p>
                    <div v-if="!!orderDetails?.food?.name" class="text-[#7DA640]">
                        * {{orderDetails?.food?.name }}
                    </div>
                    <div v-if="!!orderDetails?.foodCategory?.name" class="text-[#7DA640]">
                        * {{orderDetails?.foodCategory?.name }}
                    </div>
                    <div v-if="!!orderDetails?.categoryItem?.name" class="text-[#7DA640]">
                        * {{orderDetails?.categoryItem?.name }}
                    </div>
                    <div v-if="!!orderDetails?.categoryItems?.name" class="text-[#7DA640]">
                        * {{orderDetails?.categoryItems?.name }}
                    </div>
                    <div v-if="!!orderDetails?.toasted?.name" class="text-[#7DA640]">
                        * {{orderDetails?.toasted?.name }}
                    </div>
                    <div v-if="!!orderDetails?.veggies?.name" class="text-[#7DA640]">
                        * {{orderDetails?.veggies?.name }}
                    </div>
                    <div v-if="!!orderDetails?.sauces?.name" class="text-[#7DA640]">
                        * {{orderDetails?.sauces?.name }}
                    </div>
                    <div v-if="!!orderDetails?.chips?.name" class="text-[#7DA640]">
                        * {{orderDetails?.chips?.name }}
                    </div>
                    <div v-if="!!orderDetails?.drink?.name" class="text-[#7DA640]">
                        * {{orderDetails?.drink?.name }}
                    </div>
                </div>
            </div>
        </div>
    </Card>
</template>
