/*
 * @Author: your name
 * @Date: 2021-05-06 20:57:56
 * @LastEditTime: 2021-05-11 16:02:41
 * @LastEditors: Please set LastEditors
 * @Description: 主页
 */
import React, { FC } from 'react'
import { Button } from 'UI/main'
import { normalRequest } from 'fetch'

interface homePageProps {
    [propertyName: string]: string;
}

const HomePage:　FC<homePageProps> = function() {
    const times = 5
    return (
        <div>
            <span className='test-theme-var'>测试主页</span>
            <br/>
            <div style={{ height: 50 }}></div>
            <Button type='primary' onClick={normalRequest}>点击测试并发请求{times}次</Button>
        </div>
    )
}

export default HomePage
