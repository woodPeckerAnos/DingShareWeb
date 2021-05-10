/*
 * @Author: your name
 * @Date: 2021-05-10 11:17:46
 * @LastEditTime: 2021-05-10 14:18:48
 * @LastEditors: Please set LastEditors
 * @Description: request 相关定义文件
 */
import {
    Action
} from 'redux'

interface requestState {
    fetching: boolean[];
}

type requestStatePayload = boolean

interface requestStateAction extends Action {
    payload?: requestStatePayload
}

export {
    requestState,
    requestStatePayload,
    requestStateAction
}