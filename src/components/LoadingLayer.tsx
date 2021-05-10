/*
 * @Author: your name
 * @Date: 2021-05-10 14:31:05
 * @LastEditTime: 2021-05-10 21:16:49
 * @LastEditors: Please set LastEditors
 * @Description: 请求展示Loading状态的蒙层
 */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Spin } from 'UI/main' 
import rootState from '@/store/rootState'

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
            />
        </div>
    )
}

export default LoadingLayer
