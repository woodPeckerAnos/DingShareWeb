/*
 * @Author: your name
 * @Date: 2021-05-08 18:45:07
 * @LastEditTime: 2021-05-09 23:27:10
 * @LastEditors: Please set LastEditors
 * @Description: 主程序
 */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import rootState from '@/store/rootState'
import { updateRoutes } from '@/store/routes/actions'
import FrontRoutes from '@/router'
import routes from '@/router/routes'

function App() {
  const 
    [count, setCount] = useState(0),
    device = useSelector<rootState>(state => state.basic),
    dispatch = useDispatch()
  ;useEffect(
    () => {
      console.log('设备基础信息---->', device)
    },
    [device]
  )
  useEffect(
    () => {
      // 初始化路由
      const _routes = FrontRoutes.createRealRoutes(routes)
      // fixme: 在useEffect中使用dispatch报错?
      dispatch(updateRoutes(_routes))
    },
    []
  )
  
  return (
    <div className="App">
      <FrontRoutes/>
    </div>
  )
}

export default App
