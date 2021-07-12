/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-11 17:35:30
 * @LastEditTime: 2021-07-12 18:23:24
 * @LastEditors: WoodpeckerAnos
 * @Description: 已订阅展示
 */
import React from 'react'
import classNames from 'classnames'
import VirtualCardList from 'UI/virtualCardList'

function SubscribeInfost() {
    return (
        <div
            className={classNames('private-store-list', 'subscribed-list')}
        >
            {/* 列表和内容Infos */}
            <div
                className={classNames('subscribed-list', 'left-container')}
            >
                <div
                    className={classNames('subscribed-list', 'list-head-infos')}
                >
                </div>
                <div
                    className={classNames('subscribed-list', 'subscribed-card-list')}
                >
                    <VirtualCardList />
                </div>
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
