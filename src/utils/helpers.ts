/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-07-22 18:39:36
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-07-22 19:22:13
 * @Description: 工具合集
 */
import React from 'react'
import isEqual from 'lodash/isEqual'

type withMemo = (arg: React.FunctionComponent) => React.MemoExoticComponent<React.FunctionComponent>

export const withMemo: withMemo = function(component)  {
    return React.memo<React.FunctionComponent>(component, isPropsEqual)
}
function isPropsEqual(prev: any, cur: any): boolean {
    return isEqual(prev, cur)
}

