/*
 * @Author: your name
 * @Date: 2021-05-07 17:00:50
 * @LastEditTime: 2021-05-07 17:48:42
 * @LastEditors: Please set LastEditors
 * @Description: 自运行, 校验当前device类型的工具
 */

window.addEventListener('load', initWithDeviceDetection)

function initWithDeviceDetection() {
    if (navigator) {
        const curUserAgent = navigator.userAgent.toLowerCase()
        const isIpad = curUserAgent.match(/ipad/i)
        const isIphone = curUserAgent.match(/iphone os/i)
        const isMidp = curUserAgent.match(/midp/i)
        const isUc7 = curUserAgent.match(/rv:1.2.3.4/i)
        const isUc = curUserAgent.match(/ucweb/i)
        const isAndroid = curUserAgent.match(/android/i)
        const isCE = curUserAgent.match(/windows ce/i)
        const isWM = curUserAgent.match(/windows mobile/i)
        // 将结果dispatch到store中
        
    }
}
