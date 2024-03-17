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
    <svg :width="size" :height="size" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 14C10.6787 11.8171 10.7261 16.2383 14 12.6667M2.04411 12.2101C2.05031 11.9587 2.05341 11.8331 2.08379 11.7151C2.11072 11.6104 2.15338 11.5105 2.21029 11.4188C2.27447 11.3153 2.36296 11.2264 2.53993 11.0487L11.2417 2.30865C11.5908 1.95805 12.136 1.89931 12.5511 2.16754C13.0433 2.48553 13.4638 2.9034 13.7857 3.39431L13.8082 3.42871C13.8245 3.45358 13.8327 3.46601 13.8396 3.47721C14.0951 3.88885 14.0411 4.42196 13.7081 4.77337C13.6991 4.78293 13.6886 4.79345 13.6676 4.81451L5.01874 13.5014C4.83516 13.6858 4.74337 13.7779 4.63623 13.8439C4.54125 13.9023 4.43769 13.9452 4.32937 13.9712C4.20719 14.0005 4.07739 14.0003 3.81777 13.9999L2 13.997L2.04411 12.2101Z" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
