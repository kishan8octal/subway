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
            d="M20 11C20 10.2044 19.6839 9.44129 19.1213 8.87868C18.5587 8.31607 17.7956 8 17 8H16.4C16.028 8 15.843 8 15.687 7.975C15.27 7.90886 14.8846 7.71245 14.5861 7.41391C14.2875 7.11536 14.0911 6.72999 14.025 6.313C14 6.157 14 5.972 14 5.6V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2M20 10V18C20 19.0609 19.5786 20.0783 18.8284 20.8284C18.0783 21.5786 17.0609 22 16 22H8C6.93913 22 5.92172 21.5786 5.17157 20.8284C4.42143 20.0783 4 19.0609 4 18V6C4 4.93913 4.42143 3.92172 5.17157 3.17157C5.92172 2.42143 6.93913 2 8 2H12C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
