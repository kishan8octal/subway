<script setup>
    const props = defineProps({
        size:{
            type: Object,
            required: false
        },
        className:{
            type: String,
            required: false,
        }
    });
</script>
<template>
    <svg 
            :class="[props.className]" 
            :width="size?.width || 24" :height="size?.height || 22"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" fill="none">
    <path d="M16.375 8.28125C16.375 10.6975 14.4162 12.6562 12 12.6562C9.58375 12.6562 7.625 10.6975 7.625 8.28125C7.625 5.865 9.58375 3.90625 12 3.90625C14.4162 3.90625 16.375 5.865 16.375 8.28125Z" fill="#BABABA"/>
    <path d="M16.375 17.0312H7.625C5.20875 17.0312 3.25 18.99 3.25 21.4062C3.25 22.6144 4.22938 23.5938 5.4375 23.5938H18.5625C19.7706 23.5938 20.75 22.6144 20.75 21.4062C20.75 18.99 18.7912 17.0312 16.375 17.0312Z" fill="#BABABA"/>
    </svg>
</template>
