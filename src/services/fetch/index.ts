/*
 * @Author: your name
 * @Date: 2021-05-08 16:30:25
 * @LastEditTime: 2021-05-08 18:03:14
 * @LastEditors: Please set LastEditors
 * @Description: 封装基于fetch的请求 1，普通fetch 2，基于权限的fetch
 */

// 四个构造函数 Request Response Body Header

// 普通请求
function normalRequest(method, url, options) {

}

// 在响应中添加对权限信息的监听，没有权限的情况下直接跳转到登录页
function requestWithAuth(method, url, options) {

}

// helper
function createRequest() {}

function verifyAuth() {}

export {
    normalRequest,
    requestWithAuth,
}
