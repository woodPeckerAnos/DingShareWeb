/*
 * @Author: your name
 * @Date: 2021-05-06 20:36:40
 * @LastEditTime: 2021-05-10 22:44:34
 * @LastEditors: Please set LastEditors
 * @Description: 入口TS文件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '@/App'
import store from '@/store/store'
// 初始化css根变量
import '@/assets/connect'
// 引入antd样式
// import 'antd/dist/antd.css'
import '@/assets/styles/antd.themes.less'
// 定制样式
import '@/assets/styles/index.scss'
// js 自动运行插件
import '@/lib/detectDevice'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
