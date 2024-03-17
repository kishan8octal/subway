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
    <svg :width="size" :height="size" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.666 4.66667C10.666 6.13943 9.47211 7.33333 7.99935 7.33333C6.52659 7.33333 5.33268 6.13943 5.33268 4.66667C5.33268 3.19391 6.52659 2 7.99935 2C9.47211 2 10.666 3.19391 10.666 4.66667Z" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.666 10H5.33268C3.85992 10 2.66602 11.1939 2.66602 12.6667C2.66602 13.403 3.26297 14 3.99935 14H11.9993C12.7357 14 13.3327 13.403 13.3327 12.6667C13.3327 11.1939 12.1388 10 10.666 10Z" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
