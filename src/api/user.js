import request from '@/utils/request'

export function doLogin(data) {
  const params = new URLSearchParams(data)
  return request({
    url: '/api/user/doLogin',
    method: 'post',
    data: params
  })
}

export function getInfo() {
  return request({
    url: '/api/user/getInfo',
    method: 'get'
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}
