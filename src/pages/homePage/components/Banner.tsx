/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-16 22:45:52
 * @LastEditTime: 2021-05-19 20:39:26
 * @LastEditors: WoodpeckerAnos
 * @Description: banner模组
 */

import React from 'react'
import classNames from 'classnames'
import { Button } from 'UI/main'

function Banner() {
    const jumpToSteamPost = function() {
        
    }
    return (
        <div
            className={classNames('dingshare-content', 'dingshare-banner')}
        >
            <video 
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
                poster="https://media.st.dl.pinyuncloud.com/steam/clusters/frontpage/b7ef7ffbc37ce1ebab4dde79/page_bg_schinese.jpg?t=1620928847" 
                className={classNames('banner-bg', 'fromsteam-bg__video')}
            >
                <source src="https://media.st.dl.pinyuncloud.com/steam/clusters/frontpage/b7ef7ffbc37ce1ebab4dde79/webm_page_bg_schinese.webm?t=1620928847" type="video/webm"/>
                <source src="https://media.st.dl.pinyuncloud.com/steam/clusters/frontpage/b7ef7ffbc37ce1ebab4dde79/mp4_page_bg_schinese.mp4?t=1620928847" type="video/mp4"/>
            </video>
            {/* 跳转到steam */}
            <Button
                type='primary'
                className='bg-to-steam-btn'
                onClick={jumpToSteamPost}
            >
                去Steam看看
            </Button>
        </div>
    )
}

export default Banner
