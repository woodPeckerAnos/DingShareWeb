/*
 * @Author: your name
 * @Date: 2021-05-10 11:16:48
 * @LastEditTime: 2021-05-10 14:19:14
 * @LastEditors: Please set LastEditors
 * @Description: request状态的actions
 */
import { requestStateAction } from './requestState'

export const ISFETCHING: string = 'ISFETCHING'
export const FETCHINGEND: string = 'FETCHINGEND'

export function isFetching(): requestStateAction {
    return {
        payload: true,
        type: ISFETCHING
    }
}
export function fetchEnd(): requestStateAction {
    return {
        type: FETCHINGEND
    }
}
