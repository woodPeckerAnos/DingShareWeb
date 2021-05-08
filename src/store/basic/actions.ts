/*
 * @Author: your name
 * @Date: 2021-05-08 11:08:21
 * @LastEditTime: 2021-05-08 11:19:22
 * @LastEditors: Please set LastEditors
 * @Description: store中basic数据的action类型
 */
import { devicePayload, deviceAction } from './basicState'

export const UPDATEDEVICEINFO: string = 'UPDATEDEVICEINFO'

export function updatePlatformInfo(payload: devicePayload):　deviceAction {
    return {
        type: UPDATEDEVICEINFO,
        payload
    }
}
