/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-08-11 19:56:15
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-08-18 23:38:50
 * @Description: type declare
 */
export interface cardData {

}

export type cardDataSource = cardData[]|undefined

export interface cardRowEvent {

}

export type onCardListRow =  (arg1: cardData, arg2: number) => cardRowEvent

export type getRowClassName = (arg1: cardData, arg2: number) => string|undefined

export interface virtualCardListProps {
    dataSource: cardDataSource;
    onRow?: onCardListRow;
    rowClassName?: getRowClassName;
    [propName: string]: any;
}