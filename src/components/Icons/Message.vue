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
            d="M21.803 7.762L16.295 11.267C14.738 12.257 13.96 12.753 13.124 12.945C12.3844 13.1156 11.6156 13.1156 10.876 12.945C10.04 12.753 9.262 12.257 7.705 11.267L2.197 7.762M21.803 7.762C22 8.722 22 10.006 22 12C22 14.8 22 16.2 21.455 17.27C20.9756 18.2108 20.2108 18.9756 19.27 19.455C18.2 20 16.8 20 14 20H10C7.2 20 5.8 20 4.73 19.455C3.78923 18.9756 3.02436 18.2108 2.545 17.27C2 16.2 2 14.8 2 12C2 10.006 2 8.722 2.197 7.762M21.803 7.762C21.7346 7.40375 21.6175 7.05654 21.455 6.73C20.9756 5.78923 20.2108 5.02436 19.27 4.545C18.2 4 16.8 4 14 4H10C7.2 4 5.8 4 4.73 4.545C3.78923 5.02436 3.02436 5.78923 2.545 6.73C2.38256 7.05655 2.26548 7.40376 2.197 7.762"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
