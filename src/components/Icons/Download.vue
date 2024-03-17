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
            d="M19 20H5M6 10.17C7.55181 12.2689 9.36892 14.1579 11.406 15.79C11.58 15.93 11.79 16 12 16M12 16C12.2161 15.9997 12.4257 15.9256 12.594 15.79C14.6311 14.1579 16.4482 12.2689 18 10.17M12 16V4"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
