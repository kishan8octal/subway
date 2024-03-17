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
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none">
        <path
            d="M6 15C7.57701 12.8192 9.42293 10.8636 11.4899 9.18284C11.7897 8.93905 12.2103 8.93905 12.5101 9.18284C14.5771 10.8636 16.423 12.8192 18 15"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
</svg></template>