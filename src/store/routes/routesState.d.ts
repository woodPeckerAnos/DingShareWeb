/*
 * @Author: your name
 * @Date: 2021-05-09 21:43:08
 * @LastEditTime: 2021-05-09 21:49:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dingshare-web\src\store\routes\routesState.d.ts
 */
import { Action } from 'redux'

interface routeData {
    menuName: string;
    menuUrl: string;
    menuComponent: string;
    children?: routeData[];
}

type Routes = routeData[]
type routesState = Routes
type routesPayload = routesState

interface routesAction extends Action {
    payload: routesPayload;
}

export {
    routeData,
    Routes,
    routesState,
    routesPayload,
    routesAction
}
