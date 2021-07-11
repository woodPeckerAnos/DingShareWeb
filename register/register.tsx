/*
 * @Author: WoodpeckerAnos
 * @Date: 2021-05-12 17:05:28
 * @LastEditors: WoodpeckerAnos
 * @LastEditTime: 2021-07-11 17:29:33
 * @Description: 登录入口文件
 */
/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 * 
 *        佛曰:  
 *                写字楼里写字间，写字间里程序员；  
 *                程序人员写程序，又拿程序换酒钱。  
 *                酒醒只在网上坐，酒醉还来网下眠；  
 *                酒醉酒醒日复日，网上网下年复年。  
 *                但愿老死电脑间，不愿鞠躬老板前；  
 *                奔驰宝马贵者趣，公交自行程序员。  
 *                别人笑我忒疯癫，我笑自己命太贱；  
 *                不见满街漂亮妹，哪个归得程序员？
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../src/store/store'
// 初始化css根变量
import '../src/assets/connect'
// 引入antd样式 & 引入覆盖antd样式的定制变量
import '../src/assets/styles/antd.themes.less'
// 定制样式
import '../src/assets/styles/index.scss'
// js 自动运行插件
import '../src/lib/detectDevice'
import '../src/lib/responseLayout'

function Register() {
    return <h1>这是注册页</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Register />
    </Provider>
  </React.StrictMode>,
  document.getElementById('login')
)
