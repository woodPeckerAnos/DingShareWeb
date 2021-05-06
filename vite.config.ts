import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const path = require('path')
const { resolve } = path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  //打包路径
  base:  './', 
  resolve: {
    // 别名
    alias: { 
      '@': path.resolve(__dirname, 'src'),
      'utils': path.resolve(__dirname, 'src', 'utils')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login', 'index.html')
      }
    }
  },
  css: {
    preprocessorOptions: { 
      scss: {
      // 全局的scss ，跨域放多个，例如：主题的变量，和一些混合等
        additionalData: '@import "./src/assets/styles/index.scss";',
      }
    }
  },
})
