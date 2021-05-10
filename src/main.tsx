/*
 * @Author: your name
 * @Date: 2021-05-06 20:36:40
 * @LastEditTime: 2021-05-10 16:27:35
 * @LastEditors: Please set LastEditors
 * @Description: 入口TS文件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '@/App'
import store from '@/store/store'
import '@/assets/connect.css'
// 引入antd样式
import 'antd/dist/antd.css'
// 引入覆盖antd定义的主题设置
import '@/assets/styles/index.scss'
import '@/lib/detectDevice'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
