<script setup>
import { computed } from "vue";

const props = defineProps({
    stroke: {
        type: String,
        default: 'black'
    },
    thin: {
        type: Boolean,
        default: false
    },
    size: {
        type: [String, Number],
        default: 20
    }
});

const strokeWidth = computed(() => {
    return props.thin ? '1' : '1.5';
})
</script>
<template>
    <svg :width="size" :height="size" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12L8 8M8 8L12 4M8 8L4 4M8 8L12 12" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

