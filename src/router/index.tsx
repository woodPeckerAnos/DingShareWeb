/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-06 21:02:02
 * @LastEditTime: 2021-05-12 00:20:45
 * @LastEditors: WoodpeckerAnos
 * @Description: react 路由, 根据routes数组, 输出异步加载组件构成的前端路由集合
 */
import React from 'react'
import { Switch, Route, HashRouter as Router, RouteComponentProps } from 'react-router-dom'
import AysncComponent from './components/AysncComponent'
import { routeData } from './routes'

interface frontRoutesProps {
    routes: routeData[]
}

// FrontRoutes 为直接封装的前端路由， 仅通过store更新自己
const _FrontRoutes = function(props: frontRoutesProps) {
    
    return (
        <Router>
            <Switch>
                { createRouteElement(props.routes) }
            </Switch>
        </Router>
    )
}

// 父路由下的次级路由 -> 适用于页面部分组件通过子路由控制的情况
const _SubFrontRoutes = function(props: frontRoutesProps) {
    return (
        <Switch>
            { createRouteElement(props.routes) }
        </Switch>
    )
}

// helpers
function createRouteElement(routes: routeData[]): JSX.Element[] {
    let _routes = routes
    if (routes[0] && routes[0].menuUrl !== '') {
        _routes = createRealRoutes(routes)
    }
    return _routes.map(route => {
        if (route.exact === false) {
            return (<Route key={route.menuUrl} path={`/${route.menuUrl}`} component={withAsyncComponent(route.menuComponent)} />)
        }
        return (<Route key={route.menuUrl} path={`/${route.menuUrl}`} component={withAsyncComponent(route.menuComponent)} exact />)
    })
}

function createRealRoutes(routes: routeData[]): routeData[] {
    return withDefaultPage(routes)
}

function withDefaultPage(routes: routeData[]): routeData[] {
    if (routes.length === 0) {
        return []
    }
    let _defaultPage = { menuName: '主页', menuUrl: '', menuComponent: 'homePage' } as routeData
    const _homePage = routes.find(page => page.menuComponent === 'homePage')
    const _NotFoundPage = [{ menuName: '未找到页面', menuUrl: '', menuComponent: 'notFound', exact: false }]
    if (_homePage) {
        _defaultPage = { ..._homePage, menuUrl: '' } as routeData
    }
    return [_defaultPage].concat(routes).concat(_NotFoundPage)
}

function withAsyncComponent(menuComponent: string) {
    const _compPath = menuComponent.endsWith('index') ? menuComponent : `${menuComponent}/index`
    const importFunc = () => import(`../pages/${_compPath}.tsx`)
    return (props: RouteComponentProps) => <AysncComponent importFunc={importFunc} {...props}/>
}

const FrontRoutes = React.memo(_FrontRoutes, arePropsEqual)
const SubFrontRoutes = React.memo(_SubFrontRoutes, arePropsEqual)

// memoHandler -> 仅随routes更新；严格的store规范可以让此处的判断非常简单
function arePropsEqual(prevProps: frontRoutesProps, nextProps: frontRoutesProps) {
    if (prevProps.routes === nextProps.routes) {
        return true
    }
    return false
}

export {
    createRealRoutes,
    SubFrontRoutes
}

export default FrontRoutes
