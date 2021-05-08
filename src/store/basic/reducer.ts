/*
 * @Author: your name
 * @Date: 2021-05-07 17:52:20
 * @LastEditTime: 2021-05-08 15:19:55
 * @LastEditors: Please set LastEditors
 * @Description: 基础的reducer 保存基础的侦测内容
 */
import {
    Reducer
} from 'redux'
import {
    basicState
} from './basicState'
import { UPDATEDEVICEINFO } from './actions'

const initialState: basicState = {
    platform: '',
    OS: '',
    screenWidth: 0,
    screenHeight: 0,
    devicePixelRatio: 1,
}

const basicReducer: Reducer<basicState> = function(state = initialState, action) {
    if (action.type === UPDATEDEVICEINFO) {
        return {
            ...state, 
            ...action.payload
        }
    }
    return state
}

export default basicReducer