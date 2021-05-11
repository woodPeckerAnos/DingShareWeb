/*
 * @Author: your name
 * @Date: 2021-05-06 21:01:35
 * @LastEditTime: 2021-05-12 00:02:14
 * @LastEditors: WoodpeckerAnos
 * @Description: 基础路由
 */
export interface routeData {
    menuName: string;
    menuUrl: string;
    menuComponent: string;
    exact?: boolean;
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