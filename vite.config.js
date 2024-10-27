import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      configFile: '../uno.config.js',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
        '/ciba': {
            target: 'https://open.iciba.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/ciba/, '/dsapi/'),
        },
        '/shanbei': {
          target: 'https://apiv3.shanbay.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/shanbei/, '/'),
      },
    },
},
})
