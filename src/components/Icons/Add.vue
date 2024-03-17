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
    <path d="M7.99968 12.6654V7.9987M7.99968 7.9987V3.33203M7.99968 7.9987H3.33301M7.99968 7.9987H12.6663" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
