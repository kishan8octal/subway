<script setup>
    import Card from '../components/Card.vue';
    import CloseIcon from '../components/Icons/Close.vue';
    import { computed, ref } from 'vue';
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';

    const emit = defineEmits(['close']);

    const props = defineProps({
        orderDetails: {
            type: Object,
            default: {},
        },
        isDetailsShow: {
            type: Boolean,
            default: false,
        },
    });

    const closeDetails = () => {
        emit('close');
    };
    
    const excludeData = [
        'branch',
        'deliveryTime',
        'food',
        'foodCategory',
        'customer',
        'requestBox'
    ];
    
    const address = computed(() => {
        return {
            1: "595 Tomlinson Rd, Philadelphia, PA 19116",
            2: "2060 Red Lion Rd, Philadelphia, PA 19115",
            3: "9880 Bustleton Ave, Philadelphia, PA 19115",
        }[props.orderDetails?.branch?.id];
    });
</script>
<template>
    <TransitionRoot appear :show="isDetailsShow" as="template">
        <Dialog as="div" @close="closeDetails" class="relative z-20">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25"/>
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                        <DialogPanel class="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-extrabold uppercase text-center viga-regular text-green-gradient">
                                Order Details
                            </DialogTitle>
                            <div v-if="!!orderDetails?.customer?.name" class="text-start  text-black viga-regular font-thin mt-2">
                                Your Name | {{ orderDetails?.customer?.name }}
                            </div>
                            <div v-if="!!orderDetails?.customer?.contact" class="text-start  text-black viga-regular font-thin mt-2">
                                Your Contact | {{ orderDetails?.customer?.contact }}
                            </div>
                            <div v-if="!!orderDetails?.customer?.email" class="text-start  text-black viga-regular font-thin mt-2">
                                Your Email | {{orderDetails?.customer?.email}}
                            </div>
                            
                            <div v-if="!!address" class="text-start  text-black viga-regular font-thin mt-2">
                                Delivery To | {{address}}
                            </div>
                            
                            <!-- Branch Name -->
                            <div v-if="!!orderDetails?.branch?.name" class="text-start mt-3 viga-regular text-black font-thin">
                                Your branch | {{ orderDetails?.branch?.name }}
                            </div>
                            <!-- Delivery Time -->
                            <div v-if="!!orderDetails?.deliveryTime" class="text-start  text-black viga-regular font-thin mt-2">
                                Your Delivery Time | {{ orderDetails?.deliveryTime }}
                            </div>
                            <hr class="h-px my-[12px] bg-gray-300 border-0 dark:bg-gray-700">
                            <div class="flex w-full gap-[5px] text-[18px]">
                                <span class="text-[#7DA640] lobster-regular font-extrabold">{{ orderDetails?.food?.name.split(' ').slice(1).join(' ') }}</span>
                                <span class="text-start font-extrabold lobster-regular mb-3">{{ orderDetails?.foodCategory?.name }}</span>
                            </div>
                            <template v-for="(value, key) in orderDetails" :key="key">
                                <div v-if="!excludeData.includes(key)"
                                     class="text-[#7DA640] text-md viga-regular">
                                    <div v-if="!!value?.name">* {{ value?.name }}</div>
                                    <div v-else-if="value">
                                        <div v-for="item in value">
                                             * {{item.name}} - ({{item.variant}} {{item.des}})
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <div class="mt-4">
                                <button type="button" class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" @click="closeDetails">
                                    Close
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
