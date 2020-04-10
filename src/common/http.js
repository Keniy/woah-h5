import axios from 'axios'
import { Message as $msgBox } from 'element-ui'

export const timeout = 60 * 1000

function buildHeader(option) {
    let headers = {}
    if (option) {
        headers = { ...headers, ...option }
    }
    return headers
}

function handleError(err = {}) {
    let { errorCode, message } = err
    if (axios.isCancel(errorCode)) {
        console.error(errorCode)
    }
    $msgBox({
        message: message || '发送未知错误，请重试'
    })
}

function processData(apiData = {}) {
    let requrest = {
        ...apiData
    }
    return requrest
}

let axiosConfig = (option = {}) => {
    return {
        baseURL: '',
        headers: buildHeader(option),
        timeout: timeout
    }
}

let axiosCreater = (resquestConfig = {}) => {
    let nax = axios.create(resquestConfig)
    nax.interceptors.request.use(respConfig => {
        // let token = getToken()
        // if (!token) {
        //     return null
        // }
        return respConfig
    })
    return nax
}

export function post(url, data) {
    let nax = axiosCreater(axiosConfig())
    return nax.post(url, processData(data)).then((res) => {
        return res.data
    })
}

export function get(url, data) {
    let nax = axiosCreater(axiosConfig())
    return nax.get(url, {params: processData(data)}).then((res) => {
        return res.data
    })
}