/*
 * @Author: your name
 * @Date: 2021-05-06 21:01:35
 * @LastEditTime: 2021-05-09 20:51:25
 * @LastEditors: Please set LastEditors
 * @Description: 基础路由
 */
export interface routeData {
    menuName: string;
    menuUrl: string;
    menuComponent: string;
    children?: routeData[];
}

const routes: routeData[] = [
    {
        menuName: '主页',
        menuUrl: 'homePage',
        menuComponent: 'homePage'
    },
]

export default routes