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
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :viewBox="`0 0 20 20`" fill="none">
        <path d="M21 21L14.9497 14.9497M14.9497 14.9497C16.2165 13.683 17 11.933 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.933 17 13.683 16.2165 14.9497 14.9497Z" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
