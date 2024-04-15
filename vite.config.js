import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
// import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      // VitePWA({
      //     registerType:'autoUpdate',
      //     manifest: {
      //         name: 'Subway Deliver',
      //         short_name: 'Subway',
      //         description: 'Subway delivery',
      //         theme_color: '#ffffff',
      //         icons: [
      //             {
      //                 src: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Cdemu_192x192.png',
      //                 sizes: '192x192',
      //                 type: 'image/png'
      //             },
      //             {
      //                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s',
      //                 sizes: '512x512',
      //                 type: 'image/png'
      //             }
      //         ],
      //         start_url:"/",
      //         display:"standalone",
      //         background_color:"#FFFFFF",
      //     }
      // })
    ],
})
