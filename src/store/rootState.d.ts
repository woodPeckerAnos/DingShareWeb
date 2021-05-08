/*
 * @Author: your name
 * @Date: 2021-05-08 15:13:14
 * @LastEditTime: 2021-05-08 15:14:23
 * @LastEditors: Please set LastEditors
 * @Description: 根state， 覆盖default的state定义
 */
import { basicState } from './basic/basicState'

interface rootState {
    basic: basicState;
}

export default rootState
