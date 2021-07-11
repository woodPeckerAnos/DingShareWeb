/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-19 20:46:30
 * @LastEditTime: 2021-07-11 17:27:53
 * @LastEditors: WoodpeckerAnos
 * @Description: 登陆后可见私人库，未登录则显示登录提示
 */
import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { SubFrontRoutes } from '@/router'
import { rootState, routeData, childRouteData } from 'commonDefines'
import { Button } from 'UI/main'

function LoginToShow() {
    const currentLocation = useLocation()
    const [subRoutes, updateSubRoutes] = useState<childRouteData[]>([])
    const realRoutes = useSelector<rootState, routeData[]>(state => state.routes)

    useEffect(
        () => {
            const matchedRoute = realRoutes.find(route => route.menuUrl === currentLocation.pathname.slice(1))
            if (matchedRoute && matchedRoute.children) {
                // 发送请求更新子路由
                Promise.resolve(matchedRoute.children.map(item => ({ ...item, menuUrl: matchedRoute.menuUrl })))
                    .then(subRoutesData => {
                        updateSubRoutes(subRoutesData ?? [])
                    })
            }
        },
        [currentLocation.pathname, realRoutes]
    )

    return (
        <div
            className={classNames('dingshare-content-need-auth', 'dingshare-content-private-info')}
        >
            <SubFrontRoutes routes={subRoutes} areaMatches={['privateStore']}/>
            {
                subRoutes.length === 0 && (
                    <ShowLogIn />
                )
            }
        </div>
    )
}

// subs
function ShowLogIn() {
    return (
        <div
            className='need-login-container'
        >
            <div
                className='need-login-tips'
            >
                <h3 className='main-title'>快乐DingShare?</h3>
                <p className='main-description'>登录以分享和积分畅玩</p>
                <Button
                    type='primary'
                    className='login-btn'
                    onClick={e => {
                        location.href = `/login/index.html?from=homePage`
                    }}
                >
                    登录
                </Button>
                <p className='sub-infos'>
                    <span>或者</span>
                    <Button 
                        type='link'
                        className='link-to-register'
                        onClick={e => {
                            location.href = `/register/index.html?from=homePage`
                        }}
                    >
                        免费注册
                    </Button>
                    <span>并立即加入分享行列</span>
                </p>
            </div>
        </div>
    )
}

export default LoginToShow