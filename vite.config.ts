import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://github.com/enjoycoding/vite-plugin-mock-server
import mockServer from 'vite-plugin-mock-server'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mockServer({
      logLevel: 'info',
      urlPrefixes: ['/vue3-typescript-admin/']
    }),
    eslint()
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  server: {
    proxy: {
      '/devapi': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/devapi/, '')
      }
    }
  }
})
