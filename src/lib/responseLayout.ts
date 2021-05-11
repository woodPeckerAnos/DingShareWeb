/*
 * @Author: your name
 * @Date: 2021-05-11 10:56:58
 * @LastEditTime: 2021-05-11 23:23:04
 * @LastEditors: Please set LastEditors
 * @Description: 响应式布局文件, 原始设计以1920 * 1080为适配基础
 */
import { rootfontsize } from '@/assets/staticStyleConfig.json'

const fitScreenHandler = (function() {
    // 60帧节流
    let flag = true
    const basedWidth = 1920
    const basedHeight = 1080
    const basedRootfontsize = parseInt(rootfontsize)

    return function() {
        if (flag) {
            flag = false
            // response here
            const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

            ;const newRootfontsize = (windowWidth / basedWidth) * basedRootfontsize
            const root = document.getElementsByTagName('html')[0]
            root.style.setProperty('--rootfontsize', `${newRootfontsize}px`)

            setTimeout(
                () => {
                    flag = true
                },
                1000/60
            )
        }
    }
})()

window.addEventListener('resize', fitScreenHandler)

fitScreenHandler()
