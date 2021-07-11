/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-11 23:51:45
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-07-11 18:07:41
 * @Description: 登录用户可以查看的私人记录库
 */
import React, { useState } from 'react'
import { Tabs } from 'UI/main'
import classNames from 'classnames'
import SharedInfos from './components/SharedInfos'
import SubscribeInfost from './components/SubscribeInfost'
import './privateStore.scss'

function PrivateStore() {
    const [activeTab, changeTab] = useState('1')
    return (
        <div
            className={classNames('need-authority', 'private-store-list')}
        >
            <Tabs
                className='private-store-tabs'
                type="card"
                tabBarGutter={0}
                activeKey={activeTab}
                onChange={key => changeTab(key)}
            >
                <Tabs.TabPane 
                    tab='已订阅' 
                    key='1'
                >
                    <SubscribeInfost />
                </Tabs.TabPane>
                <Tabs.TabPane   
                    tab='已分享' 
                    key='2'
                >
                    <SharedInfos />
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default PrivateStore
