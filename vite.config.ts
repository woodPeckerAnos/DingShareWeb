/*
 * @Author: your name
 * @Date: 2021-05-06 20:50:38
 * @LastEditTime: 2021-05-19 20:52:26
 * @LastEditors: WoodpeckerAnos
 * @Description: Vite Configs
 */
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

const path = require('path')
const { resolve } = path

// https://vitejs.dev/config/

export default {
  ...defineConfig({
    plugins: [
      reactRefresh(), 
      dynamicImportVars({
        include: [], 
        exclude: [
          // 不编译html文件，因为编译html文件必定会解析失败，需要手动指定去除
          "./*.html", 
          "/login/*.html", 
          "/src/assets/styles/*.scss", 
          "/src/assets/styles/*.themes.less", 
          "node_modules/**",
          "/src/pages/**/*.scss"
        ], 
        warnOnError: true
      })
    ],
    //打包路径
    base:  './', 
    resolve: {
      // 别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'utils': path.resolve(__dirname, 'src', 'utils'),
        'commonDefines': path.resolve(__dirname, 'src', 'defines', 'common.d.ts'),
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
