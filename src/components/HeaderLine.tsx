/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-22 18:38:13
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-07-22 20:04:54
 * @Description: 顶部栏
 */
import React, {  } from 'react'
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
            className='dingShare-header-line'
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
        margin: '0 auto',
        maxWidth: 940,
        width: 'calc(940rem / var(--pxPerRem))',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        color: '#b8b6b4'
    },
    titleStyle: {
        color: '#b8b6b4',
        fontSize: '36px',
        margin: 0
    }
}

export default withMemo(HeaderLine)
