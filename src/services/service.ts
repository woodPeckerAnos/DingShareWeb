/*
 * @Author: your name
 * @Date: 2021-05-08 16:29:37
 * @LastEditTime: 2021-05-14 22:58:28
 * @LastEditors: Please set LastEditors
 * @Description: 请求集合
 */
import { normalRequest, requestWithAuth, requestSteam } from './fetch'

interface service {
    [propName: string]: (...args: any[]) => Promise<any>;
}

const Services: service = {
    /* 请求DingShare */

    /* 请求steam数据库 */
    // { appids: 632360 }
    getGameDetails(params) {
        return requestSteam.get('api/appdetails', { params })
    }
}

export default Services
