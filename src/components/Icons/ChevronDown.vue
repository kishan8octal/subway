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
            d="M18 9C16.423 11.1808 14.5771 13.1364 12.5101 14.8172C12.2103 15.0609 11.7897 15.0609 11.4899 14.8172C9.42294 13.1364 7.57701 11.1808 6 9"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
</svg></template>