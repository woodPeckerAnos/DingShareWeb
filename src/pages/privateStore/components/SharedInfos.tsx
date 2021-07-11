/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-11 17:35:58
 * @LastEditTime: 2021-07-11 18:33:16
 * @LastEditors: WoodpeckerAnos
 * @Description: 已分享展示
 */
import React from 'react'
import classNames from 'classnames'

function SharedInfos() {
    return (
        <div
            className={classNames('private-store-list', 'shared-list')}
        >
            <div
                className={classNames('shared-list', 'left-container')}
            >

            </div>
            <div
                className={classNames('shared-list', 'right-container')}
            >

            </div>
        </div>
    )
}

export default SharedInfos
