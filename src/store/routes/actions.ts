/*
 * @Author: your name
 * @Date: 2021-05-09 21:44:26
 * @LastEditTime: 2021-05-09 21:52:44
 * @LastEditors: Please set LastEditors
 * @Description: routes 相关actions
 */
import { routesPayload, routesAction } from './routesState'

export const UPDATEROUTES: string = 'UPDATEROUTES'

export function updateRoutes(payload: routesPayload): routesAction {
    return {
        type: UPDATEROUTES,
        payload
    }
}
