/*
 * @Author: your name
 * @Date: 2021-05-07 17:56:58
 * @LastEditTime: 2021-05-07 19:12:45
 * @LastEditors: Please set LastEditors
 * @Description: 基础store数据的定义文件
 */
interface basicState {
    platform: string;
    OS: string;
    screenWidth: number;
    screenHeight: number;
    devicePixelRatio: number;
}

export {
    basicState
}
