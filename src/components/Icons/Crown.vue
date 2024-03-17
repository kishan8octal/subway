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
            d="M19.2302 21.5C14.5687 19.7518 9.43169 19.7518 4.77021 21.5M19.9422 17.707L22.4272 6.94002C22.5692 6.32402 21.8162 5.90602 21.3692 6.35302C18.8132 8.90902 14.4782 8.01902 13.1362 4.66302L12.3712 2.75102C12.3414 2.67704 12.2901 2.61366 12.224 2.56903C12.1579 2.5244 12.08 2.50055 12.0002 2.50055C11.9204 2.50055 11.8425 2.5244 11.7764 2.56903C11.7103 2.61366 11.659 2.67704 11.6292 2.75102L10.8642 4.66302C9.52221 8.02002 5.18721 8.91002 2.63121 6.35302C2.18421 5.90602 1.43121 6.32302 1.57321 6.94002L4.05821 17.707C9.17877 15.7867 14.8217 15.7867 19.9422 17.707Z"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
