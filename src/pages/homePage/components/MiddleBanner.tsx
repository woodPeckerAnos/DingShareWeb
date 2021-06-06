/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-21 21:09:13
 * @LastEditTime: 2021-06-05 22:07:58
 * @LastEditors: WoodpeckerAnos
 * @Description: 中等大小的轮播展示 -> 热门游戏展示
 */
import React from 'react'
import classNames from 'classnames'
import { Carousel } from 'UI/main'

function MiddleBanner() {
    return (
        <div
            className={classNames('dingshare-normal-background', 'dingshare-middle-banner-hot')}
        >
            <div
                className={classNames('middle-banner-center-container')}
            >

            </div>
        </div>
    )
}

export default MiddleBanner
