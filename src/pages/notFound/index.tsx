/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-11 23:53:18
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-05-12 00:21:21
 * @Description: 404 页面，前端路由
 */
import React, { useCallback } from 'react'
import * as HistoryType from 'history'
import { Result, Button } from 'UI/main'

interface NotFoundProps {
    history: HistoryType.History
}

function NotFound(props: NotFoundProps) {
    const backHome = useCallback(
        () => {
            props.history.push('')
        },
        [],
    )
    return (
        <Result
            title='404 Not Found'
            status='404'
            subTitle='没有找到你想看的页面哦，换个试试'
            extra={<Button type="primary" onClick={backHome}>返回首页</Button>}
        />
    )
}

export default NotFound
