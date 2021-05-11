/*
 * @Author: your name
 * @Date: 2021-05-11 10:56:58
 * @LastEditTime: 2021-05-11 15:55:47
 * @LastEditors: Please set LastEditors
 * @Description: 响应式布局文件, 原始设计以1920 * 1080为适配基础
 */

const fitScreenHandler = (function() {
    // 60帧节流
    let flag = true
    return function() {
        if (flag) {
            flag = false
            // response here
            

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
