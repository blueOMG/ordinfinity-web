import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteSingleFile } from 'vite-plugin-singlefile';
const isApp = process.env.NODE_ENV == "APPENV";
// https://vitejs.dev/config/
let config = {
  plugins: [
    vue(),
    isApp ? viteSingleFile() : '',
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  server: {
    port: 8889,
    open: true,
    proxy: {
      "/api": {
        target: 'https://nft-uniapp.com',//代理地址 凡是使用/api
        changeOrigin: true,
        pathRewrite: {
        }
      }
    }


  },
}
export default defineConfig(config)
