import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

const ENABLE_DEVTOOLS_VUE = false;

export default defineConfig({
  plugins: [vue(), ...(ENABLE_DEVTOOLS_VUE ? [vueDevTools()] : [])],
  server: {
    port: 5174,
    strictPort: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use "@/assets/styles/helpers/variables.scss" as *;
            @use "@/assets/styles/helpers/functions.scss" as *;
            @use "@/assets/styles/helpers/mixins.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
