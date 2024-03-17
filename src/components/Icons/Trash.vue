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
    <svg :width="size" :height="size" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.667 4.66667L9.92994 3.19257C9.5645 2.46168 8.81748 2 8.00033 2C7.18317 2 6.43615 2.46168 6.07071 3.19257L5.33366 4.66667M2.66699 4.66667H13.3337M6.66699 8V10.6667M9.33366 8V10.6667M4.00033 4.66667H12.0003V10C12.0003 11.2425 12.0003 11.8638 11.7973 12.3538C11.5267 13.0072 11.0076 13.5264 10.3541 13.797C9.86409 14 9.24284 14 8.00033 14C6.75781 14 6.13656 14 5.6465 13.797C4.99309 13.5264 4.47396 13.0072 4.20331 12.3538C4.00033 11.8638 4.00033 11.2425 4.00033 10V4.66667Z" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
