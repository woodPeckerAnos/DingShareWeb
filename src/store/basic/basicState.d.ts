/*
 * @Author: your name
 * @Date: 2021-05-07 17:56:58
 * @LastEditTime: 2021-05-08 11:17:39
 * @LastEditors: Please set LastEditors
 * @Description: 基础store数据的定义文件
 */
import { Action } from 'redux'

interface basicState {
    platform: string;
    OS: string;
    screenWidth: number;
    screenHeight: number;
    devicePixelRatio: number;
}

interface devicePayload extends basicState {}

interface deviceAction extends Action {
    payload: devicePayload
}

export {
    basicState,
    devicePayload,
    deviceAction
}
