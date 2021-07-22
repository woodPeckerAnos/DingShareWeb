/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-06 20:57:56
 * @LastEditTime: 2021-07-22 19:25:15
 * @LastEditors: WoodpeckerAnos
 * @Description: 主页
 */
import React, { FC } from 'react'
import classNames from 'classnames'
import { Layout } from 'UI/main'
import Services from '@/services/service'
import Banner from './components/Banner'
import LoginToShow from './components/LoginToShow'
import MiddleBanner from './components/MiddleBanner'
import PublicStoreList from './components/PublicStoreList'
import Logo from './components/Logo'
import HeaderLine from '@/components/HeaderLine'
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
                <HeaderLine />
            </Header>
            <Content
                className={classNames('dingshare-content', 'dingshare-homepage-content')}
            >
                {/* banner模块 */}
                <Banner />
                {/* 放置权限模块，登录则显示私有库，未登录则显示登录按钮 */}
                <LoginToShow />
                {/* 轮播banner -> 参照steam特惠 */}
                <MiddleBanner />
                {/* 列表list -> 展示当前存在的库内容 */}
                <PublicStoreList />
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
