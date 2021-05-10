/*
 * @Author: your name
 * @Date: 2021-05-10 11:17:17
 * @LastEditTime: 2021-05-10 14:22:13
 * @LastEditors: Please set LastEditors
 * @Description: request 处理状态的 reducer
 */
import {
    Reducer
} from 'redux' 
import { requestState } from './requestState'
import { ISFETCHING, FETCHINGEND } from './actions'

const initialState: requestState = {
    fetching: []
}

const requestReducer: Reducer<requestState> = function(state = initialState, action) {
    if (action.type === ISFETCHING) {
        return {
            fetching: [...state.fetching, action.payload]
        }
    }
    if (action.type === FETCHINGEND) {
        // 先进先出原则
        const _newLine = state.fetching.slice(1)
        return {
            fetching: _newLine
        }
    }
    return state
}

export default requestReducer
