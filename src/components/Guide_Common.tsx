/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-22 19:45:53
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-07-22 20:15:58
 * @Description: common guide
 */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'UI/main'
import { withMemo } from 'helpers'
import { stylesObj } from 'commonDefines'

const { SubMenu, ItemGroup, Item } = Menu

function Guide_Common() {
    return (
        <div
            className='dingShare-common-guide'
            style={styles.guideLineStyle}
        >
            <Menu
                mode="horizontal"
                onClick={() => {}}
            >
                <SubMenu>
                </SubMenu>
                <SubMenu></SubMenu>
                <Item>
                    <NavLink to={'#'}>关于</NavLink>
                </Item>
            </Menu>
        </div>
    )
}

const styles: stylesObj = {
    guideLineStyle: {}
}

export default withMemo(Guide_Common)
