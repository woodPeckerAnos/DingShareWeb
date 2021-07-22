/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-22 19:49:34
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-07-22 19:51:35
 * @Description: log in bar in top
 */
import React from 'react'
import { withMemo } from 'helpers'
import { stylesObj } from 'commonDefines'

function LoginBar() {
    return (
        <div
            className='dingShare-login-bar'
            style={styles.barStyle}
        >
            
        </div>
    )
}

const styles: stylesObj = {
    barStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 200,
        height: 26,
        backgroundColor: 'pink'
    }
}

export default withMemo(LoginBar)