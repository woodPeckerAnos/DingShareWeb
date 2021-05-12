/*
 * @Author: your name
 * @Date: 2021-05-10 14:31:05
 * @LastEditTime: 2021-05-12 16:17:02
 * @LastEditors: WoodpeckerAnos
 * @Description: 请求展示Loading状态的蒙层
 */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SyncOutlined } from '@ant-design/icons'
import { Spin } from 'UI/main' 
import rootState from '@/store/rootState'

const customisedIcon = <SyncOutlined style={{ fontSize: '0.75rem' }} spin/>

function LoadingLayer() {
    const 
        [loading, setLoading] = useState<boolean>(false),
        fetchingLine = useSelector<rootState, boolean[]>(state => state.request.fetching)
    ;useEffect(
        () => {
            setLoading(fetchingLine.some(pending => pending))
        },
        [fetchingLine]
    )

    return (
        <div
            className='dingshare-loading-layer'
            style={{
                display: loading ? 'flex' : 'none',
            }}
        >
            <Spin
                spinning={loading}
                indicator={customisedIcon}
                tip='请求中 ...'
            />
        </div>
    )
}

export default LoadingLayer
