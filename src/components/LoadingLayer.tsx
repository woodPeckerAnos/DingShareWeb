/*
 * @Author: your name
 * @Date: 2021-05-10 14:31:05
 * @LastEditTime: 2021-05-11 15:44:19
 * @LastEditors: Please set LastEditors
 * @Description: 请求展示Loading状态的蒙层
 */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'UI/main' 
import rootState from '@/store/rootState'

const customisedIcon = <LoadingOutlined spin/>

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
        >
            <Spin
                spinning={loading}
                indicator={customisedIcon}
            />
        </div>
    )
}

export default LoadingLayer
