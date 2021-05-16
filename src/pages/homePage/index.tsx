/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-06 20:57:56
 * @LastEditTime: 2021-05-16 22:48:20
 * @LastEditors: WoodpeckerAnos
 * @Description: 主页
 */
import React, { FC } from 'react'
import classNames from 'classnames'
import { Layout } from 'UI/main'
import Services from '@/services/service'
import Banner from './components/Banner'
import './homepage.scss'

const { Header, Content, Footer } = Layout

interface homePageProps {
    [propertyName: string]: string;
}

const HomePage:　FC<homePageProps> = function() {
    
    return (
        <Layout
            className='dingshare-homepage-container'
        >
            <Header
                className={classNames('dingshare-header', 'dingshare-homepage-header')}
            >
                {/* 顶部主要为操作栏 */}
            </Header>
            <Content
                className={classNames('dingshare-content', 'dingshare-homepage-content')}
            >
                {/* banner模块 */}
                <Banner />
                {/* content模块 */}
            </Content>
            <Footer
                className={classNames('dingshare-footer', 'dingshare-homepage-footer')}
            >
                {/* 底部主要为固定的页面信息 */}
            </Footer>
        </Layout>
    )
}

export default HomePage
