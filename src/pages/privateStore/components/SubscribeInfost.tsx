/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-11 17:35:30
 * @LastEditTime: 2021-07-11 18:40:30
 * @LastEditors: WoodpeckerAnos
 * @Description: 已订阅展示
 */
import React from 'react'
import classNames from 'classnames'

function SubscribeInfost() {
    return (
        <div
            className={classNames('private-store-list', 'subscribed-list')}
        >
            {/* 列表和内容Infos */}
            <div
                className={classNames('subscribed-list', 'left-container')}
            >

            </div>
            {/* 一些详情 */}
            <div
                className={classNames('subscribed-list', 'right-container')}
            >

            </div>
        </div>
    )
}

export default SubscribeInfost
