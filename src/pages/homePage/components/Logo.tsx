/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-11 18:48:48
 * @LastEditTime: 2021-07-11 22:08:54
 * @LastEditors: WoodpeckerAnos
 * @Description: DingShareIcon
 */
import React from 'react'
import DingDang from '@/assets/images/DingSahre_vector.ico'

function Logo() {
    return (
        <div
            className='website-main-logo'
            style={styles.iconContainer}
        >
            <a href='#' title='ding-share 叮当分享'>
                <img className='ding-share-logo' src={DingDang} style={styles.imgStyle}/>
                <h1 style={styles.titleStyle}>叮当分享，分享乐趣，DingShare</h1>
            </a>
        </div>
    )
}

const styles = {
    iconContainer: {
        height: '1.04rem',
        width: '1.04rem',
        padding: '0.1rem'
    },
    imgStyle: {
        width: '100%',
        height: '100%'
    },
    titleStyle: {
        fontSize: 0,
        height: 0,
        width: 0
    }
}

export default Logo
