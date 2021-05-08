/*
 * @Author: your name
 * @Date: 2021-05-06 20:36:40
 * @LastEditTime: 2021-05-08 16:15:27
 * @LastEditors: Please set LastEditors
 * @Description: 入口TS文件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '@/App'
import store from '@/store/store'
import '@/assets/connect.css'
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
