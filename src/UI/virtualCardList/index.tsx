/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-11 18:59:00
 * @LastEditTime: 2021-07-11 20:52:38
 * @LastEditors: WoodpeckerAnos
 * @Description: 虚拟滚动的卡片列表
 *                 构建卡片的数据类型 { imgSrc, name, tags, off, price }
 */
import React from 'react'
import { Card } from 'UI/main' 
import { FixedSizeList } from "react-window"
import AutoSizer from 'react-virtualized-auto-sizer'

function VirtualCardList({
    dataSource = [],
    ...rest
}, ref) {
    return (
        <AutoSizer>
            {({ height, width }) => {
                return (
                    <FixedSizeList
                        className='virtual-list-for-item-cards'
                        height={height}
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
function rowRender({ index, style } : rowRenderProps ) {
    return (
        <Card
            className='virtual-list-card'
            style={style}
        >
            {index}
        </Card>
    )
}

interface rowRenderProps {
    index: number;
    style: React.CSSProperties;
}

export default React.forwardRef(VirtualCardList)
