import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const path = require('path')
const { resolve } = path

// https://vitejs.dev/config/
export default {
  ...defineConfig({
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
    }
  })
}
