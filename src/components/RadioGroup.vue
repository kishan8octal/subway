<script setup>
    import { ref } from 'vue';
    import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
    import { CheckCircleIcon } from '@heroicons/vue/20/solid';

    const props = defineProps({
        options: {
            type: Array,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        isSimple:{
            type: Boolean,
            required: false
        },
    });
</script>
<template>
    <RadioGroup :disabled="disabled">
        <div :class="!isSimple ? 'grid grid-cols-1 gap-y-6 sm:gap-x-2' : 'flex flex-wrap gap-1'">
            <RadioGroupOption as="template" v-for="option in options" :key="option.id" :value="option" v-slot="{ active, checked }">
                <div :class="[active ? 'border-green-600' : 'border-gray-300', !checked && disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                'relative flex items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  rounded-lg border bg-white px-4 py-3 focus:outline-none hover:border-green-600 hover:ring-2 hover:ring-green-600 hover:ring-opacity-20 text-xl viga-regular text-green-gradient']">
                    <span class="flex flex-1">
                        <RadioGroupLabel as="span" class="block capitalize" :class="!checked && disabled ? 'text-neutral-gray-500' : 'text-neutral-gray-900'">
                            {{ option.name }}
                        </RadioGroupLabel>
                    </span>
                    <CheckCircleIcon v-if="!isSimple" :class="[!checked ? 'invisible' : '', 'h-10 w-10 text-green-600']" aria-hidden="true"/>
                    <span v-if="!isSimple" :class="[active ? 'border' : 'border', checked ? 'border-green-600' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true"/>
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>
