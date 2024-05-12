<script setup>
    import { ref ,onMounted } from 'vue';
    const app = import.meta.env.VITE_APP_ENV;
    const LATITUDE = import.meta.env.VITE_LATITUDE;
    const LONGITUDE = import.meta.env.VITE_LONGITUDE;
    
    const accessible = ref(false);
    const changeDegreeToRaduis = (deg) => {
        return deg * (Math.PI / 180);
    }
    
   const calculateDistance = (point1, point2) => {
       const R = 6371; // Earth's radius in kilometers
       const lat1 = changeDegreeToRaduis(point1.latitude);
       const lat2 = changeDegreeToRaduis(point2.latitude);
       const lon1 = changeDegreeToRaduis(point1.longitude);
       const lon2 = changeDegreeToRaduis(point2.longitude);

       const dLat = lat2 - lat1;
       const dLon = lon2 - lon1;

       const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
           Math.cos(lat1) * Math.cos(lat2) *
           Math.sin(dLon / 2) * Math.sin(dLon / 2);

       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        // Distance in kilometers
       return R * c;
   }
   
    onMounted(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                const userLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                const targetLocation = { latitude: LATITUDE, longitude: LONGITUDE };
                const distance = calculateDistance(userLocation, targetLocation);
                if (distance <= 1.25) {
                    accessible.value = true;
                }
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    });
    
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
    <div v-if="accessible || app === 'local'" class="min-h-screen overflow-hidden">
        <router-view></router-view>
    </div>
    <div v-else>
        not access
    </div>
</template>

<style scoped></style>
