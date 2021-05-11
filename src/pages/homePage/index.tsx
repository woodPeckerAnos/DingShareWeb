/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-06 20:57:56
 * @LastEditTime: 2021-05-11 23:42:45
 * @LastEditors: WoodpeckerAnos
 * @Description: 主页
 */
import React, { FC } from 'react'
import classNames from 'classnames'
import { Button, Layout } from 'UI/main'
import { normalRequest } from 'fetch'
import './homepage.scss'

const { Header, Content, Footer } = Layout

interface homePageProps {
    [propertyName: string]: string;
}

const HomePage:　FC<homePageProps> = function() {
    const times = 5
    return (
        <Layout
            className='dingshare-homepage-container'
        >
            <Header
                className={classNames('dingshare-header', 'dingshare-homepage-header')}
            >

            </Header>
            <Content
                className={classNames('dingshare-content', 'dingshare-homepage-content')}
            >
                <Button type='primary' onClick={normalRequest as React.MouseEventHandler<HTMLElement>}>点击测试并发请求{times}次</Button>
            </Content>
            <Footer
                className={classNames('dingshare-footer', 'dingshare-homepage-footer')}
            >
                
            </Footer>
        </Layout>
    )
}

export default HomePage
