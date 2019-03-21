import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-urlencoded'
const http = axios.create();
http.defaults.timeout = 3000;
// 请求拦截器配置 
// http.interceptors.request.use(config => { 
//     return config
// }, error => {
//     console.log(error)
//     return Promise.reject(error)
// })
// // 响应拦截器配置
// http.interceptors.response.use(response => { 
//     return response
// }, error => {
//     console.log(error)
//     return Promise.reject(error)
// })
//axios封装
export function request(url, params={}) { 
    return new Promise((resolve, reject) => { 
        axios.post(url, params).then(response => {
            resolve(response.data) 
        }).catch(error => {
            reject(error) 
        })
    })
}

