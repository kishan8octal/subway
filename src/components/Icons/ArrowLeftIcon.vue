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
    <svg :width="size" :height="size" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.35867 5C5.60584 6.2963 4.03153 7.81065 2.6746 9.50473C2.5582 9.65006 2.5 9.82503 2.5 10M7.35867 15C5.60584 13.7037 4.03153 12.1893 2.6746 10.4953C2.5582 10.3499 2.5 10.175 2.5 10M2.5 10H17.5"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
