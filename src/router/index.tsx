/*
 * @Author: your name
 * @Date: 2021-05-06 21:02:02
 * @LastEditTime: 2021-05-09 23:21:53
 * @LastEditors: Please set LastEditors
 * @Description: react 路由, 根据routes数组, 输出异步加载组件构成的前端路由集合
 */
import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import AysncComponent from './components/AysncComponent'
import { routeData } from './routes'
import rootState from '@/store/rootState'


// FrontRoutes 为直接封装的前端路由， 仅通过store更新自己
const FrontRoutes = function() {
    const routes = useSelector<rootState, routeData[]>(state => state.routes)

    return (
        <Router>
            <Switch>
                { createRouteElement(routes) }
            </Switch>
        </Router>
    )
}

// helpers
function createRouteElement(routes: routeData[]): JSX.Element[] {
    const _routes = createRealRoutes(routes)
    return _routes.map(route => (<Route key={route.menuUrl} path={`/${route.menuUrl}`} component={withAsyncComponent(route.menuComponent)} exact />))
}

function createRealRoutes(routes: routeData[]): routeData[] {
    return withDefaultPage(routes)
}

function withDefaultPage(routes: routeData[]): routeData[] {
    return [{ menuName: '主页', menuUrl: '', menuComponent: 'homePage' }].concat(routes)
}

function withAsyncComponent(menuComponent: string) {
    const _compPath = menuComponent.endsWith('index') ? menuComponent : `${menuComponent}/index`
    const importFunc = () => import(`../pages/${_compPath}.tsx`)
    return () => <AysncComponent importFunc={importFunc} />
}

FrontRoutes.createRealRoutes = createRealRoutes
FrontRoutes.withDefaultPage = withDefaultPage

export default FrontRoutes
