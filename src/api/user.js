import request from '@/utils/request'

export function doLogin(data) {
  const params = new URLSearchParams(data)
  return request({
    url: '/api/user/doLogin',
    method: 'post',
    data: params
  })
}
// http://182.61.43.155:6001/api/stuInfo
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

export function updateNickname() {
  return request({
    url: '/api/user/updateNickname',
    method: 'post'
  })
}

export function setPassword() {
  return request({
    url: '/api/user/setPassword',
    method: 'post'
  })
}
