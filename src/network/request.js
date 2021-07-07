import axios from 'axios'

export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    // 2.axios拦截器
    // 2.1请求拦截的作用
    instance.interceptors.request.use(config => {
        // console.log(config);
        // 拦截后记得返回
        return config
    }, err => {
        console.log(err);
    })

    // 2.2响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求
    // instance()返回值是Promise
    return instance(config)
}