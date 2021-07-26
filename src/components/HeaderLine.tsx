/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-22 18:38:13
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-07-26 17:13:42
 * @Description: 顶部栏
 */
import React from 'react'
import { Typography } from 'UI/main'
import { stylesObj } from 'commonDefines'
import { withMemo } from 'helpers'
import Logo from './Logo'
import GuideCommon from './Guide_Common'
import LoginBar from './LoginBar'
import { websiteURL } from '../../web_config.json'

const { Title } = Typography

function HeaderLine() {
    return (
        <div
            className='dingShare-header-line steam-like-content-container'
            style={styles.headerLineStyle}
        >
            <Logo />
            <a href={websiteURL}>
                <Title
                    className='dingShare-website-title-main'
                    level={1}
                    style={styles.titleStyle}
                >
                    DingShare
                </Title>
            </a>
            <GuideCommon/>
            <LoginBar/>
        </div>
    )
}

const styles: stylesObj = {
    headerLineStyle: {
        display: 'flex',
        alignItems: 'center',
        color: '#b8b6b4'
    },
    titleStyle: {
        color: '#b8b6b4',
        fontSize: '36px',
        margin: 0,
        marginRight: 40,
    }
}

export default withMemo(HeaderLine)
