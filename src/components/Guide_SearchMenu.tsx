/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-26 17:13:11
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-07-26 18:00:50
 * @Description: 搜索导航栏
 */
import React from 'react'
import { Input } from 'UI/main'
import { stylesObj } from 'commonDefines'
import { withMemo } from 'helpers'

function Guide_SearchMenu() {
    return (
        <div
            className='dingShare-search-menu-guide steam-like-content-container'
            style={styles.searchLineStyle}
        >
            <div
                className='menu-group'
            >

            </div>
            <div
                className='search-games'
            >
                <Input.Search
                    className='special-color-search'
                    placeholder='搜索'
                    style={styles.searchStyle}
                />
            </div>
        </div>
    )
}

const styles: stylesObj = {
    searchLineStyle: {
        height: 34,
        lineHeight: '34px',
        marginTop: 30,
        marginBottom: 20,
        backgroundImage: 'linear-gradient(90deg, #3e6796ea 11.38%, #3a78b1cc 25.23%, #0f216e 100%)',
        display: 'flex',
        justifyContent: 'space-between'
    },
    groupStyle: {},
    searchStyle: {
        marginTop: 1
    },
}

export default withMemo(Guide_SearchMenu)