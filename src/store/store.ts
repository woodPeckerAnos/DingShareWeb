/*
 * @Author: your name
 * @Date: 2021-05-06 21:01:11
 * @LastEditTime: 2021-05-09 21:55:09
 * @LastEditors: Please set LastEditors
 * @Description: store 文件
 */
import { createStore, combineReducers } from 'redux'
import basic from './basic/reducer'
import routes from './routes/reducer'

const reducers = combineReducers({
    basic, routes
})

const store = createStore(reducers)

export default store
