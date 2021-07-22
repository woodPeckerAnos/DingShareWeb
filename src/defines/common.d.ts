/*
 * @Author: your name
 * @Date: 2021-05-06 21:06:12
 * @LastEditTime: 2021-07-22 19:27:22
 * @LastEditors: WoodpeckerAnos
 * @Description: ts 通用类型定义文件
 */
import { CSSProperties } from 'react'
import rootState from '@/store/rootState'
import { routeData, childRouteData } from '@/store/routes/routesState'

interface stylesObj {
    [property: string]: CSSProperties
}

export type {
    rootState,
    routeData,
    childRouteData,
    stylesObj
}
