/*
 * @Author: your name
 * @Date: 2021-05-10 14:31:05
 * @LastEditTime: 2021-05-10 16:37:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Spin } from 'UI/main' 
import rootState from '@/store/rootState'
import { requestState } from '@/store/request/requestState'

interface loadingProps {
    type: "spin"|"progress"
}

function LoadingLayer(props: loadingProps) {
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
