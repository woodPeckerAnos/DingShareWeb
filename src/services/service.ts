/*
 * @Author: your name
 * @Date: 2021-05-08 16:29:37
 * @LastEditTime: 2021-05-13 21:14:42
 * @LastEditors: Please set LastEditors
 * @Description: 请求集合
 */
import { normalRequest } from './fetch'

const Services = {
    /* 请求DingShare */

    /* 请求steam数据库 */
    normalRequest('GET', 'api/appdetails', { params: { appids: 632360 } })
}

export default Services
