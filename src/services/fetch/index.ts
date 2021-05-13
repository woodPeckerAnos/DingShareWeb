/*
 * @Author: your name
 * @Date: 2021-05-08 16:30:25
 * @LastEditTime: 2021-05-13 23:28:37
 * @LastEditors: Please set LastEditors
 * @Description: 封装基于fetch的请求 1，普通fetch 2，基于权限的fetch
 */
import store from '@/store/store'
import qs from 'qs'
import { isFetching, fetchEnd } from '@/store/request/actions'
import { host, steamHost } from '../serverConfig.json'
import { HttpRequestHeader } from 'antd/lib/upload/interface'

// 登录页URL
const loginUrl = <string>`${location.origin}/login/`

interface requestOptions extends Object {
    params?: object;
    headers?: HttpRequestHeader;
}

type requestType = (this: $Request, a: string, b: requestOptions) => Promise<any>

// request 通用类
class $Request {
    protected _host: string;
    protected _verify: boolean;
    constructor(host: string, verifyAuth: boolean = false) {
        this._host = host
        this._verify = verifyAuth
    }

    private startLoading() {
        store.dispatch(isFetching())
    }

    private endLoading() {
        store.dispatch(fetchEnd())
    }

    get: requestType = function(this: $Request, url, options) {
        // 格式化参数
        const _headers = new Headers(options.headers)
        const _params = qs.stringify(options.params, { addQueryPrefix: true })
        // 创建请求
        this.startLoading()
        const _request = new Request(
            `${this._host}${url}${_params}`,
            {
                method: 'GET',
                headers: _headers,
            }
        )
        // 发送请求，并处理响应
        return fetch(_request)
            .then(response => {
                this._verify && this.verifyAuth(response)
                if (response.status === 200) {
                    if (response.headers.get('Content-Type') === 'application/json') {
                        return response.json()
                    }
                    if (response.headers.get('Content-Type') === 'application/javascript') {
                        return response.arrayBuffer()
                    }
                    if (response.headers.get('Content-Type')?.startsWith('application/')) {
                        return response.blob()
                    }
                    return response.json()
                }
                throw new Error(`failed with code ${response.status}`)
            })
            .then(res => {
                // 返回解析后的响应
                return res
            })
            .catch(error => {
                // 捕获的异常
                throw error
            })
            .finally(() => {
                // 结束请求状态
                this.endLoading()
            })
    }

    post: requestType = function(this: $Request, url, options) {
        // 格式化参数
        const _headers = new Headers(options.headers)
        let _params
        if (!_headers.get('Content-Type')) {
            // 默认设置请求头Content-Type
            _headers.append('Content-Type', 'application/json')
            _params = JSON.stringify(options.params)
        }
        if (_headers.get('Content-Type') === 'multipart/form-data') {
            // 含文本的表单上传, 不要手动设置请求头
            _headers.delete('Content-Type')
            const _formData = new FormData()
            Object.entries(options.params as object).forEach(
                ([key, val]) => {
                    _formData.append(key, val)
                }
            )
            _params = _formData
        }
        if (!_params) {
            _params = options.params
        }

        // 创建请求
        this.startLoading()
        const _request = new Request(
            `${this._host}${url}`,
            {
                method: 'POST',
                headers: _headers,
                body: <BodyInit>_params
            }
        )
        
        // 发送请求，并处理响应
        return fetch(_request)
            .then(response => {
                this._verify && this.verifyAuth(response)
                if (response.status === 200) {
                    if (response.headers.get('Content-Type') === 'application/json') {
                        return response.json()
                    }
                    if (response.headers.get('Content-Type') === 'application/javascript') {
                        return response.arrayBuffer()
                    }
                    if (response.headers.get('Content-Type')?.startsWith('application/')) {
                        return response.blob()
                    }
                    return response.json()
                }
                throw new Error(`failed with code ${response.status}`)
            })
            .then(res => {
                // 返回解析后的响应
                return res
            })
            .catch(error => {
                // 捕获的异常
                throw error
            })
            .finally(() => {
                // 结束请求状态
                this.endLoading()
            })
    }

    verifyAuth(response: Response): Promise<Response> {
        // 通过返回来校验是否授权
        if (response.status === 403) {
            location.href = loginUrl
            throw new Error('未授权的用户！')
        }
        return Promise.resolve(response)
    }
}

// 普通请求
const normalRequest = (method, url, options) => {
    let _url = url
    let _method = method.toUpperCase()
    // 请求头信息
    const _headers = new Headers(options.headers)
    // 请求参数
    let params = {}
    if (_method === 'GET') {

    }
    if (_method === 'POST') {

    }
    // 创建请求
    const _request = new Request(
        _url,
        {
            method: _method,
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
function get(url, options) {

}
function post(url, options) {

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

// 请求steam数据
function requestToSteam(method, url, options) {

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
