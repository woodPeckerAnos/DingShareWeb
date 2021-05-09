/*
 * @Author: your name
 * @Date: 2021-05-06 20:57:56
 * @LastEditTime: 2021-05-09 20:36:20
 * @LastEditors: Please set LastEditors
 * @Description: 主页
 */
import React, { FC } from 'react'

interface homePageProps {
    [propertyName: string]: string;
}

const HomePage:　FC<homePageProps> = function() {
    return (
        <div>
            测试主页
        </div>
    )
}

export default HomePage
