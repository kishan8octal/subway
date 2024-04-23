<script setup>
    import { onMounted, ref } from 'vue';
    import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

    const props = defineProps({
        modelValue: {
            type: [String, Number, Array],
        },
        maxLength: {
            type: String,
        },
        variant: {
            type: String,
            default: 'default',
        },
        placeholder: {
            type: String,
        },
    });

    defineEmits(['update:modelValue']);

    const input = ref(null);

    const validateInput = (event) => {
        if (event.target.value.length > props.maxLength) {
            event.target.value = event.target.value.substr(0, props.maxLength - 1);
        }
    };

    onMounted(() => {
        if (input.value.hasAttribute('autofocus')) {
            input.value.focus();
        }
    });
</script>
<style>
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
    }
</style>
<template>
    <div v-if="variant==='search'" class="flex border !h-10 border-neutral-gray-300 items-center md:w-[400px] gap-2 p-3 px-3 bg-white rounded-md">
        <MagnifyingGlassIcon class="h-4 text-neutral-gray-400"/>
        <input ref="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="rounded-md border-none !text-body-medium placeholder-text-neutral-gray-900 w-full !p-0 focus:ring-0" @keypress="validateInput" :placeholder="placeholder"/>
    </div>

    <input v-else class="
    rounded-large 
    !h-10 border-neutral-gray-300 !text-body-medium text-neutral-gray-900 placeholder-neutral-gray-600 focus:shadow-sm focus:border focus:border-green-600 focus:ring-2 focus:ring-green-600 focus:ring-opacity-20 p-3" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input" @keypress="validateInput" :placeholder="placeholder"/>
</template>
