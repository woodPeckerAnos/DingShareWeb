/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-11 17:35:30
 * @LastEditTime: 2021-07-22 17:25:06
 * @LastEditors: WoodpeckerAnos
 * @Description: 已订阅展示
 */
import React, { useRef, useState, useCallback, useEffect } from 'react'
import classNames from 'classnames'
import VirtualCardList from 'UI/virtualCardList'
import { Typography, Input } from 'UI/main'

const devData = [
    {
        imgSrc: 'https://media.st.dl.pinyuncloud.com/steam/apps/1277400/capsule_sm_120.jpg?t=1626058895',
        name: 'Monster Hunter Stories 2: Wings of Ruin',
        tags: ['角色扮演', '冒险', '探索', '日系角色扮演'],
        off: '0.13',
        price: '396',
    },
    {
        imgSrc: 'https://media.st.dl.pinyuncloud.com/steam/apps/775500/capsule_184x69.jpg?t=1624639483',
        name: '绯红结系',
        tags: ['动作', '冒险', '角色扮演', '动漫'],
        off: '0.25',
        price: '328',
    }
]
const devList: any[] = []
while(devList.length < 1000) {
    let key = devList.length
    devList.push({ ...devData[devList.length % 2], key })
}

function SubscribeInfost() {
    const [list, updateList] = useState(devList)
    const [activeCard, changeActive] = useState(0)
    const onRow = function(record, index) {
        return {
            onMouseEnter: () => {
                changeActive(index)
            },
        }
    }
    const rowClassName = function(record, index) {
        if (index === activeCard) return 'virtual-list-item-card-active'
    }
    
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
                    <Typography.Title 
                        style={styles.titleStyle}
                        level={3}
                    >
                        我已订阅的游戏：
                    </Typography.Title>
                    <Input.Search
                        style={styles.searchStyle}
                        placeholder='根据名称模糊查询'
                    />
                </div>
                <div
                    className={classNames('subscribed-list', 'subscribed-card-list')}
                >
                    <VirtualCardList 
                        dataSource={list}
                        onRow={onRow}
                        rowClassName={rowClassName}
                    />
                </div>
            </div>
            {/* 一些详情 */}
            <div
                className={classNames('subscribed-list', 'right-container')}
            >
                <div
                    className='personal-shared-infos'
                >

                </div>
                <div
                    className='chosen-game-detail'
                >
                    
                </div>
            </div>
        </div>
    )
}

// commonVariables
const styles = {
    titleStyle: {
        marginBottom: 4
    },
    searchStyle: {
        width: 260
    }
}

export default SubscribeInfost
