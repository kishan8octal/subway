<script setup>
    import { computed } from 'vue';

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
        <path d="M7.90025 6.78831C7.14713 7.56296 6.11267 8 5.03227 8H0.5H28.5H23.9677C22.8873 8 21.8529 7.56296 21.0998 6.78831L15.934 1.47496C15.1486 0.66717 13.8514 0.66717 13.066 1.47496L7.90025 6.78831Z" fill="white" />
    </svg>
</template>
