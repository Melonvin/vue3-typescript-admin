import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://github.com/enjoycoding/vite-plugin-mock-server
import mockServer from 'vite-plugin-mock-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mockServer({
      logLevel: 'info'
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  }
})
