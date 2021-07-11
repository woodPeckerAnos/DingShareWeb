/*
 * @Author: your name
 * @Date: 2021-05-06 21:01:35
 * @LastEditTime: 2021-07-11 17:33:43
 * @LastEditors: WoodpeckerAnos
 * @Description: 基础路由
 */
export interface routeData {
    menuName: string;
    menuUrl: string;
    menuComponent: string;
    exact?: boolean;
    children?: childRouteData[];
}

export interface childRouteData extends routeData {
    selfPath: string;
}

const routes: routeData[] = [
    {
        menuName: '主页',
        menuUrl: 'homePage',
        menuComponent: 'homePage',
        children: [
            {
                menuName: '个人库信息',
                menuUrl: 'homePage',
                selfPath: 'privateStore',
                menuComponent: 'privateStore',
            }
        ]
    },
]

export default routes