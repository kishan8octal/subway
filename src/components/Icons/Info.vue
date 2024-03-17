<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        stroke: {
            type: String,
            default: '#737373'
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
            d="M12 12V16M12 8.625V8.62387M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
