<script setup>
    import { computed, useSlots, ref } from 'vue';
    import Icon from '../components/Icon.vue';

    const props = defineProps({
        type: {
            type: String,
            default: 'submit',
        },
        to: {
            type: String,
        },
        icon: {
            type: Function,
        },
        variant: {
            type: String,
            default: 'default',
        },
        align: {
            type: String,
            default: 'left',
        },
        size: {
            type: String,
            default: '1x',
        },
        preserveScroll: {
            type: Boolean,
            default: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false
        }
    });

    let iconColor = ref('white');

    const baseClasses = computed(() => {
        return `inline-flex ${props.align === 'right' ? 'flex-row-reverse' : ''}
        items-center rounded-lg p-3 text-label-medium gap-0.5 focus:ring-2 justify-center focus-within:outline-none`;
    })

    const variantClasses = computed(() => {
        switch (props.variant) {
            case 'primary':
                iconColor.value = 'white';
                return `text-white bg-primary-gradient hover:bg-primary shadow-medium
                focus:ring-green-600 focus:ring-opacity-20 focus:shadow-focus`;

            case 'secondary':
                iconColor.value = '#171717';
                return `text-black bg-secondary-gradient hover:bg-neutral-gray-100 shadow-small
                 border focus:border-green-600 focus:ring-green-600 focus:ring-opacity-20 focus:shadow-focus`;

            case 'secondaryDestructive':
                iconColor.value = '#DC2626';
                return `text-secondary-destructive bg-secondary-gradient hover:bg-neutral-gray-100 shadow-small
                 border focus:border-red-600 focus:ring-red-600 focus:ring-opacity-20 focus:shadow-focus`;

            case 'destructive':
                iconColor.value = 'white';
                return `bg-destructive-gradient text-white hover:bg-destructive shadow-medium
                 border focus:border-destructive focus:ring-destructive focus:ring-opacity-20 focus:shadow-focus`;

            case 'tertiary':
                iconColor.value = '#171717';
                return `text-neutral-gray-900 shadow-small focus:border-green-600 focus:ring-green-600
                focus:ring-opacity-20 focus:shadow-focus`;

            default:
                iconColor.value = '#171717';
                return `text-black bg-secondary-gradient hover:bg-neutral-gray-100 shadow-small
                 border focus:border-green-600 focus:ring-green-600 focus:ring-opacity-20 focus:shadow-focus`;
        }
    });

    const sizeClasses = computed(() => {
        switch (props.size) {
            case 'large':
                return `h-10`;
            case 'medium':
                return `h-8`;
            case 'small':
                return `h-7`;
            default:
                return `large`;
        }
    });

    const hasAnySlot = computed(() => {
        return Object.keys(useSlots()).length > 0;
    });
</script>
<style scoped>
    .bg-primary-gradient:not(:hover) {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%), #009C5B;
    }

    .bg-secondary-gradient:not(:hover) {
        background: linear-gradient(180deg, rgba(223, 224, 231, 0.00) 0%, rgba(223, 224, 231, 0.16) 100%), #FFF;
    }

    .bg-destructive-gradient:not(:hover) {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%), #DC2626;
    }
</style>
<template>
    <router-link
            :to="to"
            :class="[baseClasses, variantClasses, sizeClasses, disabled ||loading ? 'opacity-50' : '']"
            v-if="type == 'link'" :preserve-scroll="preserveScroll"
            :disabled="disabled || loading"
    >
        <Icon
                v-if="icon || loading"
                :stroke="iconColor"
                :name="loading ? 'loader' : icon"
                class="h-4 w-4 flex-shrink-0"
                :class="{ 'mr-1': hasAnySlot, 'animate-loading' : loading }"
                aria-hidden="true"
        />
        <span class="px-1">
            <slot></slot>
        </span>
    </router-link>
    <a
            :href="to" :class="[baseClasses, variantClasses, sizeClasses, disabled ||loading ? 'opacity-50' : '']"
            v-else-if="type == 'a-link'"
            :disabled="disabled || loading"
    >
        <Icon
                v-if="icon || loading"
                :stroke="iconColor"
                :name="loading ? 'loader' : icon"
                class="h-4 w-4 flex-shrink-0"
                :class="{ 'mr-1': hasAnySlot, 'animate-loading' : loading }"
                aria-hidden="true"
        />
        <span class="px-1">
        <slot></slot>
        </span>
    </a>
    <button
            :type="type"
            :class="[baseClasses, variantClasses, sizeClasses, disabled ||loading ? 'opacity-50' : '']"
            v-else :disabled="disabled || loading">
        <Icon
                v-if="icon || loading"
                :stroke="iconColor"
                :name="loading ? 'loader' : icon"
                class="h-4 w-4 flex-shrink-0"
                :class="{ 'mr-1': hasAnySlot, 'animate-loading' : loading }"
                aria-hidden="true"
        />
        <span class="px-1">
        <slot></slot>
        </span>
    </button>
</template>
