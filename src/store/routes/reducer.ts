/*
 * @Author: your name
 * @Date: 2021-05-09 21:41:03
 * @LastEditTime: 2021-05-09 21:54:32
 * @LastEditors: Please set LastEditors
 * @Description: store 存储的路由数据
 */
import {
    Reducer
} from 'redux'
import {
    Routes
} from './routesState'
import { UPDATEROUTES } from './actions'

const initialSatate: Routes = []

const routesReducer: Reducer<Routes> = function(state = initialSatate, action) {
    if (action.type === UPDATEROUTES) {
        return action.payload
    }
    return state
}

export default routesReducer