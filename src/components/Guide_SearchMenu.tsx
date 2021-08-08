/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-26 17:13:11
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-08-08 22:25:50
 * @Description: 搜索导航栏
 */
import React, { useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Menu } from 'UI/main'
import { stylesObj } from 'commonDefines'
import { withMemo } from 'helpers'

const { SubMenu, Item, ItemGroup } = Menu

function Guide_SearchMenu() {
    const [activeMenu, changeActive] = useState<string[]>([])
    const changeMenu = useCallback(
        ({ item, key, keyPath, selectedKeys, domEvent }) => {
            changeActive([key])
        },
        [changeActive],
    )

    return (
        <div
            className='dingShare-search-menu-guide steam-like-content-container'
            style={styles.searchLineStyle}
        >
            <div
                className='menu-group'
            >
                <Menu
                    className='search-menus'
                    mode="horizontal"
                    onSelect={changeMenu}
                    selectedKeys={activeMenu}
                >
                    <SubMenu
                        title='您的商店'
                        key='ownStore'
                        popupClassName='dingShare-search-guide-common-popmenu'
                        popupOffset={[-16, 0]}
                    >
                        <Item
                            key='homePage'
                        >
                            <NavLink to={'#'}>主页</NavLink>
                        </Item>
                        <Item
                            key='communityRecs'
                        >
                            <NavLink to={'#'}>社区推荐</NavLink>
                        </Item>
                        <Item
                            key='checkedRecently'
                        >
                            <NavLink to={'#'}>最近已查看</NavLink>
                        </Item>
                        <Item
                            key='communityArt'
                        >
                            <NavLink to={'#'}>社区鉴赏家</NavLink>
                        </Item>
                    </SubMenu>
                    <SubMenu
                        className='icon-fix-before'
                        title='新鲜推荐'
                        key='newRecommend'
                        popupClassName='dingShare-search-guide-common-popmenu'
                        popupOffset={[-24, 0]}
                    >
                        <Item
                            key='popSales'
                        >
                            <NavLink to={'#'}>热销商品</NavLink>
                        </Item>
                        <Item
                            key='newAndPopularGames'
                        >
                            <NavLink to={'#'}>新品与热门</NavLink>
                        </Item>
                        <Item
                            key='forSales'
                        >
                            <NavLink to={'#'}>当前特惠</NavLink>
                        </Item>
                        <Item
                            key='recentlyUpdated'
                        >
                            <NavLink to={'#'}>最近更新</NavLink>
                        </Item>
                        <Item
                            key='comingSoon'
                        >
                            <NavLink to={'#'}>即将推出</NavLink>
                        </Item>
                    </SubMenu>
                    <SubMenu
                        className='icon-fix-before'
                        title='类别'
                        key='gameType'
                        popupClassName='dingShare-search-guide-game-types-menu'
                        popupOffset={[-24, 0]}
                    >
                        { renderTypesNav(colDefines) }
                    </SubMenu>
                    <Item 
                        key='pointStore'
                    >
                        <NavLink to={'#'}>点数商店</NavLink>
                    </Item>
                    <Item 
                        key='news'
                    >
                        <NavLink to={'#'}>新闻</NavLink>
                    </Item>
                    <Item 
                        key='labs'
                    >
                        <NavLink to={'#'}>实验室</NavLink>
                    </Item>
                </Menu>
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

// helpers
function renderTypesNav(colDefines = []) {
    let _res = null
    _res = colDefines.map((col) => {
        const {title, dataIndex, items} = col
        let itemTypes = null
        if (items && items.length > 0) {
            itemTypes = items.map(item => {
                if (item.children) {
                    return React.createElement(
                        ItemGroup,
                        { title: item.title, key: item.dataIndex },
                        item.children.map(type => {
                            const linkEl = React.createElement(NavLink, { to: '#' }, type.title)
                            return React.createElement(Item, { key: type.dataIndex }, linkEl)
                        })
                    )
                }
            })
        }
        return itemTypes
    })
    return _res
}

// common varibales
const colDefines = [
    {
        title: '类型',
        dataIndex: 'types',
        items: [
            { 
                title: '动作', 
                dataIndex: 'act',
                children: [
                    { title: '动作类 Rogue', dataIndex: 'actRouge' },
                    { title: '平台及奔跑', dataIndex: 'platform' },
                    { title: '格斗及武术', dataIndex: 'fight' },
                    { title: '清版动作', dataIndex: '2d' },
                    { title: '第一人称射击', dataIndex: 'fps' },
                    { title: '第三人称射击', dataIndex: 'tps' },
                    { title: '街机及节奏', dataIndex: 'arcadeRhythm' },
                ]
            },
            { 
                title: '冒险休闲', 
                dataIndex: 'adventureAndCasual',
                children: [
                    { title: '休闲', dataIndex: 'casual' },
                    { title: '冒险', dataIndex: 'adventure' },
                    { title: '冒险角色扮演', dataIndex: 'adventureRpg' },
                    { title: '剧情丰富', dataIndex: 'interactiveFiction' },
                    { title: '类银河战士恶魔城', dataIndex: 'metroidvania' },
                    { title: '视觉小说', dataIndex: 'visualNovel' },
                    { title: '解谜', dataIndex: 'puzzleMatching' },
                ]
            },
            { 
                title: '角色扮演', 
                dataIndex: 'rpg',
                children: [
                    { title: '冒险角色扮演', dataIndex: 'adventureRpg' },
                    { title: '动作角色扮演', dataIndex: 'rpgAction' },
                    { title: '回合制', dataIndex: 'rpgTurnBased' },
                    { title: '团队制', dataIndex: 'rpgPartyBased' },
                    { title: '日系角色扮演', dataIndex: 'jrpg' },
                    { title: '策略角色扮演', dataIndex: 'rpgStrategyTactics' },
                    { title: '类 Rogue', dataIndex: 'rogueLike' },
                ]
            },
            { 
                title: '模拟', 
                dataIndex: 'sim',
                children: [
                    { title: '农场及制作', dataIndex: 'simFarmingCrafting' },
                    { title: '商业及大亨', dataIndex: 'simBusinessTycoon' },
                    { title: '太空及飞行', dataIndex: 'simSpaceFlight' },
                    { title: '建造及自动化', dataIndex: 'simBuildingAutomation' },
                    { title: '恋爱', dataIndex: 'simDating' },
                    { title: '沙盒及物理', dataIndex: 'simPhysicsSandbox' },
                    { title: '生活及沉浸式', dataIndex: 'simLife' },
                ]
            },
            { 
                title: '策略', 
                dataIndex: 'strategy',
                children: [
                    { title: '军事', dataIndex: 'strategyMilitary' },
                    { title: '卡牌及桌游', dataIndex: 'strategyCardBoard' },
                    { title: '即时战略', dataIndex: 'strategyRealTime' },
                    { title: '回合制策略', dataIndex: 'strategyTurnBased' },
                    { title: '城市及居住地', dataIndex: 'strategyCitiesSettlements' },
                    { title: '塔防', dataIndex: 'towerDefense' },
                    { title: '大战略及 4X', dataIndex: 'strategyGrand4x' },
                ]
            },
            { 
                title: '体育竞速', 
                dataIndex: 'sport',
                children: [
                    { title: '体育模拟', dataIndex: 'sportsSim' },
                    { title: '单人运动', dataIndex: 'sportsIndividual' },
                    { title: '团队体育', dataIndex: 'sportsTeam' },
                    { title: '所有运动', dataIndex: 'sports' },
                    { title: '竞速', dataIndex: 'racing' },
                    { title: '竞速模拟', dataIndex: 'racingSim' },
                    { title: '钓鱼及狩猎', dataIndex: 'sportsFishingHunting' },
                ]
            },
        ]
    },
    {
        title: '主题',
        dataIndex: 'themes',
        items: [
            { title: '动漫', dataIndex: 'commic' },
            { title: '太空', dataIndex: 'space' },
            { title: '开放世界', dataIndex: 'openworld' },
            { title: '恐怖', dataIndex: 'horror' },
            { title: '悬疑及推理', dataIndex: 'mystery' },
            { title: '生存', dataIndex: 'survival' },
            { title: '科幻及赛博朋克', dataIndex: 'fictionalOrCyberpunk' },
        ]
    },
    {
        title: '玩家支持',
        dataIndex: 'playType',
        items: [
            { title: '单人', dataIndex: 'single' },
            { title: '合作', dataIndex: 'coop' },
            { title: '在线竞技', dataIndex: 'onlineMatch' },
            { title: '多人', dataIndex: 'multiple' },
            { title: '大型多人在线', dataIndex: 'onlineMultiple' },
            { title: '局域网', dataIndex: 'LAN' },
            { title: '本地及派对', dataIndex: 'localeMultiple' },
        ]
    },
]
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