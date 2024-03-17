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
            d="M2 21H22M4 13V18M9 13V18M15 13V18M20 13V18M22 10H2V9L10.08 2.94C10.768 2.424 11.113 2.165 11.49 2.066C11.8243 1.97784 12.1757 1.97784 12.51 2.066C12.887 2.166 13.232 2.424 13.92 2.94L22 9V10Z"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
