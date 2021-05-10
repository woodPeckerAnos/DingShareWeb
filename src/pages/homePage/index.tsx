/*
 * @Author: your name
 * @Date: 2021-05-06 20:57:56
 * @LastEditTime: 2021-05-10 18:00:58
 * @LastEditors: Please set LastEditors
 * @Description: 主页
 */
import React, { FC } from 'react'
import { Button } from 'UI/main'

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
            <Button type='primary'>点击测试并发请求{times}次</Button>
        </div>
    )
}

export default HomePage
