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
            d="M6 8.8304C7.55556 6.727 9.37278 4.83783 11.4057 3.20952C11.5801 3.06984 11.79 3 12 3M18 8.8304C16.4444 6.727 14.6272 4.83783 12.5943 3.20952C12.4199 3.06984 12.21 3 12 3M12 3L12 21"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
</svg></template>