<script setup>
    const app = import.meta.env.VITE_APP_ENV;
    
    document.onkeydown = function(e) {
        if (app === 'local'){
            return true;
        }

        if(event.keyCode == 123) {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
            return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
            return false;
        }
    }
</script>

<template>
    <div class="min-h-screen">
        <router-view></router-view>
    </div>
</template>

<style scoped></style>
