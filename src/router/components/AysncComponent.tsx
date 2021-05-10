/*
 * @Author: your name
 * @Date: 2021-05-06 21:02:29
 * @LastEditTime: 2021-05-10 10:38:54
 * @LastEditors: Please set LastEditors
 * @Description: 异步加载组件 -> 构建异步加载路由
 */
import React, { useState, useEffect } from 'react'

interface importResult {
    default: React.FC|React.ComponentClass
}
type importFunc = () => Promise<importResult>
type newState = null|React.FC|React.ComponentClass
type stateFunc = () => newState
type updateStateFunc = (argument: newState|stateFunc) => void
interface AsyncComponentProps {
    importFunc: importFunc;
    [propName: string]: any;
}

function AsyncComponent(props: AsyncComponentProps): null|JSX.Element {
    const 
        [LoadedComponent, load] = useState<null|React.FC|React.ComponentClass>(null),
        { importFunc, ...rest } = props
    ;useEffect(
        () => {
            // asyncLoad
            LoadingComponent(load, importFunc)
        },
        []
    )
    // caution: React.Component 是一个已经创建好的类组件实例，React.ComponentClass 才是组件的构造类
    return LoadedComponent ? React.createElement(LoadedComponent, rest) : null
}

// helpers
async function LoadingComponent(load: updateStateFunc, importFunc:　importFunc): Promise<void> {
    const esModule = await importFunc()
    const $Comp = esModule.default
    load(() => $Comp)
}

export default AsyncComponent
