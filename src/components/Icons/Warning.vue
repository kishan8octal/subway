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
            d="M12 13V8.93768M12 16V15.999M13.2355 4.2522C12.4454 3.91593 11.5546 3.91593 10.7645 4.2522C8.40767 5.25526 2.84035 14.1527 3.00351 16.5308C3.06747 17.463 3.5294 18.3211 4.26914 18.8819C6.23598 20.3727 17.764 20.3727 19.7309 18.8819C20.4706 18.3211 20.9325 17.463 20.9965 16.5308C21.1596 14.1527 15.5923 5.25526 13.2355 4.2522Z"
            :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
