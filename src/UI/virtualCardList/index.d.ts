/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-08-11 19:56:15
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-08-11 20:11:25
 * @Description: type declare
 */
interface cardData {

}

type cardDataSource = cardData[]|undefined

interface cardRowEvent {

}

type onCardListRow =  (arg1: cardData, arg2: number) => cardRowEvent

type getRowClassName = (arg1: cardData, arg2: number) => string|undefined

interface virtualCardListProps {
    dataSource: cardDataSource;
    onRow?: onCardListRow;
    rowClassName?: getRowClassName;
    [propName: string]: any;
}