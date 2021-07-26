/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-22 19:49:34
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-07-26 16:51:50
 * @Description: log in bar in top
 */
import React from 'react'
import { Button } from 'UI/main'
import { NavLink } from 'react-router-dom'
import { withMemo } from 'helpers'
import { stylesObj } from 'commonDefines'
import DownLoadImg from '@/assets/dev/btn_header_installsteam_download.png'

function LoginBar() {
    return (
        <div
            className='dingShare-login-bar'
            style={styles.barStyle}
        >
            <div
                className='download-btn'
                style={styles.btnContainerStyle}
            >
                <Button
                    size='small'
                    type='primary'
                >
                    <img 
                        src={DownLoadImg}
                        style={styles.btnImgStyle}
                    />
                    <span
                        style={styles.btnTextStyle}
                    >
                        下载 DingShare
                    </span>
                </Button>
            </div>
            <div
                className='link-to-login'
                style={styles.linkContainerStyle}
            >
                <NavLink 
                    className='to-login-anchor'
                    to='#'
                >
                    登录
                </NavLink>
                <span style={styles.deviderStyle}>分隔符</span>
            </div>
        </div>
    )
}

const styles: stylesObj = {
    barStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: 28,
        paddingTop: 2,
        lineHeight: '26px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    btnContainerStyle: {
        marginRight: 14
    },
    btnImgStyle: {
        marginRight: 6,
        height: 12,
    },
    btnTextStyle: {
        fontSize: '12px'
    },
    linkContainerStyle: {
        position: 'relative',
    },
    deviderStyle: {
        display: 'inline-block',
        fontSize: 0,
        width: 1,
        margin: '0 4px',
        height: '60%',
        backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0), #b8b6b4 16%, #b8b6b4 84%, rgba(0,0,0,0))',
    }
}

export default withMemo(LoginBar)