/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-19 20:46:30
 * @LastEditTime: 2021-05-21 20:41:12
 * @LastEditors: WoodpeckerAnos
 * @Description: 登陆后可见私人库，未登录则显示登录提示
 */
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { SubFrontRoutes } from '@/router'
import { rootState, routeData } from 'commonDefines'
import { Button } from 'UI/main'

function LoginToShow() {
    const currentLocation = useLocation()
    const [subRoutes, updateSubRoutes] = useState<routeData[]>([])
    const realRoutes = useSelector<rootState, routeData[]>(state => state.routes)

    useEffect(
        () => {
            const matchedRoute = realRoutes.find(route => route.menuUrl === currentLocation.hash)
            if (matchedRoute) {
                updateSubRoutes(matchedRoute.children ?? [])
            }
        },
        [currentLocation.hash, realRoutes]
    )

    return (
        <div
            className={classNames('dingshare-content-need-auth', 'dingshare-content-private-info')}
        >
            <SubFrontRoutes routes={subRoutes} />
            {
                subRoutes.length === 0 && (
                    <ShowLogIn />
                )
            }
        </div>
    )
}

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
                >
                    登录
                </Button>
                <p className='sub-infos'>
                    <span>或者</span>
                    <Button 
                        type='link'
                        className='link-to-register'
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