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
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12.3744L9.3513 17.7199L9.77885 16.9723C12.0713 12.9638 15.2438 9.52807 19.0572 6.92405L20 6.28027"
        :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
