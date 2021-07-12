/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-11 18:59:00
 * @LastEditTime: 2021-07-12 20:05:05
 * @LastEditors: WoodpeckerAnos
 * @Description: 虚拟滚动的卡片列表
 *                 构建卡片的数据类型 { imgSrc, name, tags, off, price }
 */
import React from 'react'
import { Card, Col, Row } from 'UI/main' 
import { FixedSizeList } from "react-window"
import AutoSizer from 'react-virtualized-auto-sizer'
import isEqual from 'lodash/isEqual'
import './virtualCardList.scss'

const devData = [
    {
        imgSrc: 'https://media.st.dl.pinyuncloud.com/steam/apps/1277400/capsule_sm_120.jpg?t=1626058895',
        name: 'Monster Hunter Stories 2: Wings of Ruin',
        tags: ['角色扮演', '冒险', '探索', '日系角色扮演'],
        off: '0.13',
        price: '396',
    },
    {
        imgSrc: 'https://media.st.dl.pinyuncloud.com/steam/apps/775500/capsule_184x69.jpg?t=1624639483',
        name: '绯红结系',
        tags: ['动作', '冒险', '角色扮演', '动漫'],
        off: '0.25',
        price: '328',
    }
]
const devList: any[] = []
while(devList.length < 1000) {
    devList.push(devData[devList.length % 2])
}

function VirtualCardList({
    dataSource = devList,
    ...rest
}, ref) {
    return (
        <AutoSizer>
            {({ height, width }) => {
                return (
                    <FixedSizeList
                        className='virtual-list-for-item-cards'
                        height={height}
                        itemData={dataSource}
                        itemCount={dataSource.length}
                        itemSize={70}
                        width={width}
                    >
                        { rowRender }
                    </FixedSizeList>
                )
            }}
        </AutoSizer>
    )
}

// helpers
function rowRender({ index, style, data } : rowRenderProps ) {
    
    return (
        <Card
            className='virtual-list-card'
            style={style}
        >
            <InnerContent rowData={data[index]} />
        </Card>
    )
}
function isPropsEqual(prev: any, cur: any): boolean {
    return isEqual(prev, cur)
}

// subs
const InnerContent = React.memo(
    ({ rowData }) => {
        return (
            <Row className='game-card-row'>
                {/* img Col */}
                <Col
                    className='game-card-col'
                    span={6}
                >
                    <img 
                        className='game-card-img'
                        src={rowData.imgSrc}
                    />
                </Col>
                {/* infos Col */}
                <Col
                    className='game-card-col'
                    span={14}
                >
                    <p>{ rowData.name }</p>
                    <p>{ rowData.tags.join(',') }</p>
                </Col>
                {/* off Col */}
                <Col
                    className='game-card-col'
                    span={2}
                >
                    <span>{ rowData.off }</span>
                </Col>
                {/* priceCol */}
                <Col
                    className='game-card-col'
                    span={2}
                >
                    <span>{ rowData.price }</span>
                </Col>  
            </Row>
        )
    },
    isPropsEqual
)

interface rowRenderProps {
    index: number;
    style: React.CSSProperties;
}


export default React.forwardRef(VirtualCardList)
