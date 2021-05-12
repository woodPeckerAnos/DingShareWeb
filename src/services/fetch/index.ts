/*
 * @Author: your name
 * @Date: 2021-05-08 16:30:25
 * @LastEditTime: 2021-05-12 17:08:49
 * @LastEditors: WoodpeckerAnos
 * @Description: 封装基于fetch的请求 1，普通fetch 2，基于权限的fetch
 */
import store from '@/store/store'
import qs from 'qs'
import { isFetching, fetchEnd } from '@/store/request/actions'
// 登录页URL
const loginUrl = `${location.origin}/login/`

// 四个构造函数 Request Response Header

// 普通请求
function normalRequest(method, url, options) {
    let _url = url
    // 请求头信息
    const _headers = new Headers(options.headers)
    // 请求参数
    let params = {}
    if (method === 'GET') {

    }
    if (method === 'POST') {

    }
    // 创建请求
    const _request = new Request(
        _url,
        {
            method,
            headers: _headers,
            ...params
        }
    )
    // 发送请求
    // 处理响应并返回
    return fetch(_request)
        .then(response => {

        })
        .then(res => {

        })
        .catch(error => {

        })
        .finally(() => {

        })

}

// 在响应中添加对权限信息的监听，没有权限的情况下直接跳转到登录页
function requestWithAuth(method, url, options) {
    let _url = url
    // 请求头信息
    const _headers = new Headers(options.headers)
    // 请求参数
    let params = {}
    if (method === 'GET') {

    }
    if (method === 'POST') {

    }
    // 创建请求
    const _request = new Request(
        _url,
        {
            method,
            headers: _headers,
            ...params
        }
    )
    // 发送请求
    // 处理响应并返回
    return fetch(_request)
        .then(response => {
            // 需要判断当前的状态码，是否处于非授权状态
            // 非授权状态直接跳转到login页面
        })
        .then(res => {

        })
        .catch(error => {

        })
        .finally(() => {

        })
}

// helper
function createRequest() {}

function verifyAuth() {}

// test
function testLoading(delay = 1500) {
    store.dispatch(isFetching())
    setTimeout(
        () => {
            store.dispatch(fetchEnd())
        },
        delay
    )
}

export {
    normalRequest,
    requestWithAuth,
    testLoading
}
