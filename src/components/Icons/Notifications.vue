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
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.0008 18.5416C7.68534 18.4787 6.3714 18.3745 5.06094 18.2289C4.00076 18.1111 3.3189 17.0457 3.65623 16.0338C3.82726 15.5207 3.99949 15.016 4.04479 14.4725L4.41951 9.97582C4.74809 6.03286 8.0442 3 12.0008 3C15.9575 3 19.2536 6.03286 19.5821 9.97582L19.9571 14.475C20.0023 15.0182 20.1744 15.5228 20.3447 16.0357C20.6805 17.0472 19.9991 18.1109 18.9399 18.2287C17.6297 18.3743 16.316 18.4786 15.0008 18.5415M9.0008 18.5416V19C9.0008 20.6569 10.3439 22 12.0008 22C13.6577 22 15.0008 20.6569 15.0008 19V18.5415M9.0008 18.5416C10.9996 18.6371 13.002 18.6371 15.0008 18.5415" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
