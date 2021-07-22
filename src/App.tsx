/*
 * @Author: your name
 * @Date: 2021-05-08 18:45:07
 * @LastEditTime: 2021-07-22 17:40:55
 * @LastEditors: WoodpeckerAnos
 * @Description: 主程序
 */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import rootState from '@/store/rootState'
import { routeData } from '@/store/routes/routesState'
import { updateRoutes } from '@/store/routes/actions'
import FrontRoutes, { createRealRoutes } from '@/router'
import routes from '@/router/routes'
import LoadingLayer from '@/components/LoadingLayer'

function App() {
  const 
    device = useSelector<rootState>(state => state.basic),
    realRoutes = useSelector<rootState, routeData[]>(state => state.routes),
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
      const _routes = createRealRoutes(routes, false)
      dispatch(updateRoutes(_routes))
    },
    []
  )
  
  return (
    <div className="App">
      <div className='bg-layout'>
        <FrontRoutes routes={realRoutes}/>
        <LoadingLayer />
      </div>
    </div>
  )
}

export default App
