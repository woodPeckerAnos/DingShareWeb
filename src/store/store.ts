/*
 * @Author: your name
 * @Date: 2021-05-06 21:01:11
 * @LastEditTime: 2021-05-10 14:54:18
 * @LastEditors: Please set LastEditors
 * @Description: store 文件
 */
import { createStore, combineReducers } from 'redux'
import basic from './basic/reducer'
import routes from './routes/reducer'
import request from './request/reducer'

const reducers = combineReducers({
    basic, routes, request
})

const store = createStore(reducers)

export default store
