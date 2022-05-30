import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 每次请求携带cookies信息
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

// socketUrl
export const webSocketUrl = 'ws://47.100.88.121:7979/websocket?userId='
// export const webSocketUrl = 'ws://localhost:7979/websocket?userId='

// manageClass an axios instance
const service = axios.create({
  baseURL: 'http://47.100.88.121:6001/', // url = base url + request url
  // baseURL: 'http://localhost:6001/', // url = base url + request url
  // baseURL: 'http://lab-tongji.cn:6001/',
  // baseURL: 'http://172.20.10.3:6001/',
  // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 500000, // request timeout
  crossDomain: true
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // console.log('Request sent')
    const token = getToken()
    // console.log('interceptor ' + token)
    if (token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = getToken()
      // console.log('已有token')
    }
    return config
  },
  error => {
    // do something with request error
    // console.log(error) // for d debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    // console.log(response)
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 508: Illegal token; 512: Other clients logged in; 514: Token expired;
      if (res.code === 508 || res.code === 512 || res.code === 514) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      // debugger
      return res
    }
  },
  error => {
    // console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
