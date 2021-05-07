/*
 * @Author: your name
 * @Date: 2021-05-06 21:01:11
 * @LastEditTime: 2021-05-07 19:12:39
 * @LastEditors: Please set LastEditors
 * @Description: store 文件
 */
import { createStore, combineReducers } from 'redux'
import basic from './basic/reducer'

const reducers = combineReducers({
    basic
})

const store = createStore(reducers)

export default store
