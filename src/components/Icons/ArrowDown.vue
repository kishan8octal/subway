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
            d="M6 15.1696C7.55556 17.273 9.37278 19.1622 11.4057 20.7905C11.5801 20.9302 11.79 21 12 21M18 15.1696C16.4444 17.273 14.6272 19.1622 12.5943 20.7905C12.4199 20.9302 12.21 21 12 21M12 21L12 3"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
</svg></template>