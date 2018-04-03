import axios from 'axios'

// 所属环境
const ENV = process.env.NODE_ENV
// 默认接口域名
const BASE_URL = process.env.API_HOST
// 默认接收的数据类型
const ACCEPT = 'application/json'
// 默认超时时间
const TIME_OUT = 10000

// 创建axios实例
const service = axios.create({
  baseURL: BASE_URL,
  headers: { Accept: ACCEPT },
  timeout: TIME_OUT
})

// request 请求发送之前 拦截器
service.interceptors.request.use(config => {
  const Authorization = localStorage.getItem('Authorization')
  if (Authorization) {
    config.headers.Authorization = Authorization // 让每个请求携带token--['Authorization']
  }
  return config
}, error => {
  // Do something with request error
  console.log(error)
  Promise.reject(error)
})

// request 请求收到后 拦截器设置
service.interceptors.response.use(
  response => {
    if (response) {
      // 处理请求
      return response.data
    } else {
      console.error('响应成功，但是响应信息不存在！')
    }
  },
  error => {
    console.error(ENV === 'development' ? '服务器端产生错误！' : '网络因素，请稍后重试！')
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  })

export default service
