/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-21 21:09:13
 * @LastEditTime: 2021-07-18 18:10:14
 * @LastEditors: WoodpeckerAnos
 * @Description: 中等大小的轮播展示 -> 热门游戏展示
 */
import React, { useState } from 'react'
import classNames from 'classnames'
import { Carousel } from 'UI/main'

function MiddleBanner() {
    const [bannerGamePages, changeBanner] = useState<any[]>([{},{},{},{}])
    return (
        <div
            className={classNames('dingshare-normal-background', 'dingshare-middle-banner-hot')}
        >
            <div
                className={classNames('middle-banner-center-container')}
            >
                <Carousel effect='fade'>
                    {
                        bannerGamePages.map((banner, index) => (
                            <div 
                                className={classNames(
                                    'carousel-page-container', 
                                    `carousel-page-${index}`
                                )}
                                key={index}
                            >
                                <h3 
                                    style={{
                                        height: '100%',
                                        color: '#fff',
                                        lineHeight: '160px',
                                        textAlign: 'center',
                                        background: '#364d79',
                                    }}
                                >
                                    { index }
                                </h3>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default MiddleBanner
