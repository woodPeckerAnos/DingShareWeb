/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-22 19:45:53
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-07-26 15:43:39
 * @Description: common guide
 */
import React, { useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'UI/main'
import { withMemo } from 'helpers'
import { stylesObj } from 'commonDefines'

const { SubMenu, Item } = Menu

function Guide_Common() {
    const [activeMenu, changeActive] = useState<string[]>([])
    const changeMenu = useCallback(
        ({ item, key, keyPath, selectedKeys, domEvent }) => {
            changeActive([key])
        },
        [changeActive],
    )

    return (
        <div
            className='dingShare-common-guide'
            style={styles.guideLineStyle}
        >
            <Menu
                mode="horizontal"
                onSelect={changeMenu}
                selectedKeys={activeMenu}
            >
                <SubMenu title='商店' key='store' popupClassName='dingShare-common-guide-store-menus'>
                    <Item key='homepage'>
                        <NavLink to={'#'}>主页</NavLink>
                    </Item>
                    <Item key='mylist'>
                        <NavLink to={'#'}>我的队列</NavLink>
                    </Item>
                    <Item key='myconcious'>
                        <NavLink to={'#'}>我的关注</NavLink>
                    </Item>
                    <Item key='pointstore'>
                        <NavLink to={'#'}>积分商城</NavLink>
                    </Item>
                    <Item key='broadcast'>
                        <NavLink to={'#'}>公告信息</NavLink>
                    </Item>
                </SubMenu>
                <SubMenu title='社区' key='communications' popupClassName='dingShare-common-guide-communications-menus'>
                    <Item key='bbs'>
                        <NavLink to={'#'}>论坛</NavLink>
                    </Item>
                    <Item key='communities'>
                        <NavLink to={'#'}>游戏社群</NavLink>
                    </Item>
                    <Item key='contacts'>
                        <NavLink to={'#'}>联系我们？</NavLink>
                    </Item>
                </SubMenu>
                <Item key='about'>
                    <NavLink to={'#'}>关于</NavLink>
                </Item>
            </Menu>
        </div>
    )
}

const styles: stylesObj = {
    guideLineStyle: {
        width: 180,
        height: 40,
        paddingTop: 4,
        lineHeight: '36px'
    },
}

export default withMemo(Guide_Common)
