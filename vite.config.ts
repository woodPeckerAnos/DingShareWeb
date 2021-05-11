/*
 * @Author: your name
 * @Date: 2021-05-06 20:50:38
 * @LastEditTime: 2021-05-11 15:59:25
 * @LastEditors: Please set LastEditors
 * @Description: Vite Configs
 */
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

const path = require('path')
const { resolve } = path

// https://vitejs.dev/config/
const needDynamicImport_1 = path.join(__dirname, 'src', 'router', 'index.tsx')
const needDynamicImport_2 = path.join(__dirname, 'src', 'router', 'components', 'AysncComponent.tsx')
export default {
  ...defineConfig({
    plugins: [reactRefresh(), dynamicImportVars({include: [needDynamicImport_1, needDynamicImport_2]})],
    //打包路径
    base:  './', 
    resolve: {
      // 别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'utils': path.resolve(__dirname, 'src', 'utils'),
        'commonDefines': path.resolve(__dirname, 'src', 'defines', 'common'),
        'defines':  path.resolve(__dirname, 'src', 'defines'),
        'UI': path.resolve(__dirname, 'src', 'UI'),
        'fetch': path.resolve(__dirname, 'src', 'services', 'fetch', 'index')
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
        // 自定义antd样式主题, 生效js 以实现主题混入覆盖
        less: {
          javascriptEnabled: true
        }
      }
    }
  })
}
