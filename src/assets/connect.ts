/*
 * @Author: your name
 * @Date: 2021-05-08 18:45:07
 * @LastEditTime: 2021-05-10 22:09:13
 * @Description: 用于沟通js和样式表的关联文件
 */
import cssVars from './staticStyleConfig.json'

interface cssVars {
    [propertyName: string]: string;
}

(function(window) {
    const _root = window.document.getElementsByTagName('html')[0]
    Object.entries(cssVars as cssVars)
        .forEach(([name, value]) => {
            const varName = <string>`--${name}`
            _root.style.setProperty(varName, value)
        })
})(window)
