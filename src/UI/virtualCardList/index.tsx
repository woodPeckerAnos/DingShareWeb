/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-11 18:59:00
 * @LastEditTime: 2021-07-18 18:34:33
 * @LastEditors: WoodpeckerAnos
 * @Description: 虚拟滚动的卡片列表
 *                 构建卡片的数据类型 { imgSrc, name, tags, off, price }
 */
import React, { useCallback } from 'react'
import classNames from 'classnames'
import { Card, Col, Row, Tag } from 'UI/main' 
import { FixedSizeList } from "react-window"
import AutoSizer from 'react-virtualized-auto-sizer'
import isEqual from 'lodash/isEqual'
import './virtualCardList.scss'

const GUTTER_SIZE = 4

function VirtualCardList({
    dataSource = [],
    onRow,
    rowClassName,
    ...rest
}, ref) {

    const renderRow = useCallback(
        ({ index, style, data }) => {
            return (
                <a href='javascript:void 0;' key={index}>
                    <Card
                        className='virtual-list-card'
                        style={{
                            ...style,
                            top: index === 0 ? style.top : style.top + GUTTER_SIZE,
                            height: style.height - GUTTER_SIZE
                        }}
                    >
                        <InnerContent rowData={data[index]} index={index} onRow={onRow} rowClassName={rowClassName} />
                    </Card>
                </a>
            )
        },
        [dataSource, onRow],
    )
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
                        { renderRow }
                    </FixedSizeList>
                )
            }}
        </AutoSizer>
    )
}

// helpers
function isPropsEqual(prev: any, cur: any): boolean {
    return isEqual(prev, cur)
}

// subs
const InnerContent = React.memo(
    ({ rowData, onRow, rowClassName, index }) => {
        const onRowEvents = onRow ? onRow(rowData, index) : {}
        const _rowClasName = rowClassName ? rowClassName(rowData, index) : ''
        return (
            <Row 
                className={classNames('game-card-row', _rowClasName)}
                {...onRowEvents}
            >
                {/* img Col */}
                <div
                    className='game-card-col'
                    style={styles.imgColStyle}
                >
                    <img 
                        className='game-card-img'
                        src={rowData.imgSrc}
                    />
                </div>
                {/* infos Col */}
                <div
                    className='game-card-col'
                    style={styles.infosColStyle}
                >
                    <p>{ rowData.name }</p>
                    <p>{ rowData.tags.map(text => <Tag>{text}</Tag>) }</p>
                </div>
                {/* off Col */}
                <div
                    className='game-card-col'
                    style={styles.offColStyle}
                >
                    <span>{ rowData.off }</span>
                </div>
                {/* priceCol */}
                <div
                    className='game-card-col'
                    style={styles.priceColStyle}
                >
                    <span>{ rowData.price }</span>
                </div>  
            </Row>
        )
    },
    isPropsEqual
)

interface rowRenderProps {
    index: number;
    style: React.CSSProperties;
}

const styles = {
    imgColStyle: {
        width: 'fit-content',
        flex: 'none'
    },
    infosColStyle: {
        paddingLeft: '2%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 4,
        paddingBottom: 4
    },
    offColStyle: {
        width: '5%',
        minWidth: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceColStyle: {
        width: '5%',
        minWidth: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}


export default React.forwardRef(VirtualCardList)
