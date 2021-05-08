/*
 * @Author: your name
 * @Date: 2021-05-07 17:00:50
 * @LastEditTime: 2021-05-08 15:20:55
 * @LastEditors: Please set LastEditors
 * @Description: 自运行, 校验当前device类型的工具
 */
import store from '@/store/store'
import { updatePlatformInfo } from '@/store/basic/actions'

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
        const isWP = curUserAgent.match(/windows phone/i)
        const isWin32 = curUserAgent.match(/win32|wow32/i)
        const isWin64 = curUserAgent.match(/win64|wow64/i)
        const isMac = curUserAgent.match(/macintosh|mac os x/i)
        const isLinux = curUserAgent.match(/linux/i)
        const { platform, OS } = platformHandler([
            isIpad,
            isIphone,
            isMidp,
            isUc7,
            isUc,
            isAndroid,
            isCE,
            isWM,
            isWP,
            isWin32,
            isWin64,
            isMac,
            isLinux,
        ])
        // 将结果dispatch到store中
        const action = updatePlatformInfo({
            platform,
            OS,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            devicePixelRatio: window.devicePixelRatio,
        })
        store.dispatch(action)
    }
}

interface platformAndOs {
    platform: string;
    OS: string;
}
function platformHandler(matches: any[]): platformAndOs {
    let platform = ''
    let OS = ''
    const osMap = ['apple', 'apple', 'midp', 'uc7', 'uc', 'android', 'win', 'win', 'win', 'win32', 'win64', 'macos', 'linux']
    const platformMap = ['mobile', 'mobile', 'mobile', 'mobile', 'mobile', 'mobile', 'mobile', 'mobile', 'mobile', 'PC', 'PC', 'PC', 'PC']
    const _index = matches.findIndex(v => v)
    if (_index > 0) {
        OS = osMap[_index]
        platform = platformMap[_index]
    }
    if (_index < 0) {
        platform = '???'
        OS = '???'
    }

    return {
        platform,
        OS
    }
}