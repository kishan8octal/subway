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
    return props.thin ? '1' : '2';
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none">
    <path d="M9 18C11.1808 16.423 13.1364 14.5771 14.8172 12.5101C15.0609 12.2103 15.0609 11.7897 14.8172 11.4899C13.1364 9.42294 11.1808 7.57701 9 6" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg></template>
