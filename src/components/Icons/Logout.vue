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
            d="M18.189 8.99999C19.1753 9.73968 20.0667 10.5982 20.843 11.556C20.948 11.686 21 11.843 21 12M21 12C21.0002 12.1616 20.9448 12.3184 20.843 12.444C20.0668 13.4018 19.1754 14.2603 18.189 15M21 12H8M13 4.52799C12.1367 3.75583 11.0684 3.25004 9.92392 3.07169C8.77949 2.89333 7.6079 3.05003 6.55057 3.52287C5.49324 3.99571 4.59537 4.76448 3.96533 5.73637C3.33529 6.70827 3.00003 7.84175 3 8.99999V15C3.00003 16.1582 3.33529 17.2917 3.96533 18.2636C4.59537 19.2355 5.49324 20.0043 6.55057 20.4771C7.6079 20.9499 8.77949 21.1066 9.92392 20.9283C11.0684 20.7499 12.1367 20.2442 13 19.472"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
