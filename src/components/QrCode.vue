<template>
    <div class="h-screen flex justify-center items-center">
        <QRCodeVue3
                :width="200"
                :height="200"
                value="https://www.freshsub.us/"
                :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
                :dotsOptions="{
            type: 'square',
            // color: '#26249a',
            // gradient: {
            //   type: 'escape',
            //   rotation: 0,
            //   colorStops: [
            //     { offset: 0, color: '#26249a' },
            //     { offset: 1, color: '#26249a' },
            //   ],
            // },
          }"
                :backgroundOptions="{ color: '#ffffff' }"
                :cornersSquareOptions="{ type: 'square', color: '#000000' }"
                :cornersDotOptions="{ type: undefined, color: '#000000' }"
                fileExt="png"
                :download="true"
                myclass="my-qur"
                imgclass="img-qr"
                downloadButton="my-button"
                :downloadOptions="{ name: 'vqr', extension: 'png' }"
        />
    </div>
</template>
<script setup>
    import QRCodeVue3 from "qrcode-vue3";
</script>
