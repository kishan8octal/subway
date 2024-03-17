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
        <path d="M16 9C14.9379 7.53812 13.6929 6.22872 12.2979 5.1058C12.1226 4.96473 11.8774 4.96473 11.7021 5.1058C10.3071 6.22872 9.06206 7.53812 8 9M8 15C9.06206 16.4619 10.3071 17.7713 11.7021 18.8942C11.8774 19.0353 12.1226 19.0353 12.2979 18.8942C13.6929 17.7713 14.9379 16.4619 16 15" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
