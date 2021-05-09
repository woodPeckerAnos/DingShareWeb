/*
 * @Author: your name
 * @Date: 2021-05-08 15:13:14
 * @LastEditTime: 2021-05-09 21:47:23
 * @LastEditors: Please set LastEditors
 * @Description: 根state， 覆盖default的state定义
 */
import { basicState } from './basic/basicState'
import { routesState } from './routes/routesState'

interface rootState {
    basic: basicState;
    routes: routesState;
}

export default rootState
