<script setup>
import { computed, useSlots } from "vue";

const props = defineProps({
    stretched: {
        type: Boolean,
        default: false,
    },
    class: {
        type: String,
        required: false,
    },
});

const cardClass = computed(() => {
    return props.class
})

const hasFooter = computed(() => {
    return !!useSlots().footer;
});
</script>

<template>
    <div
        class="divide-y divide-gray-200 rounded-lg bg-white shadow"
        :class="cardClass"
    >
        <div :class="stretched ? '' : 'px-4 py-5 sm:p-6'">
            <slot></slot>
        </div>
        <div
            class="bg-gray-50 rounded-b-lg px-4 py-4 sm:flex sm:flex-row-reverse sm:px-6"
            v-if="hasFooter"
        >
            <slot name="footer"></slot>
        </div>
    </div>
    <slot name="pagination"></slot>
</template>
