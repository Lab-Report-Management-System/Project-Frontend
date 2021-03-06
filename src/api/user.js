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
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}

export function updateNickname(params) {
  return request({
    url: '/api/user/updateNickname',
    method: 'post',
    params
  })
}

export function setPassword(data) {
  const params = new URLSearchParams(data)
  return request({
    url: '/api/user/setPassword',
    method: 'post',
    data: params
  })
}

export function updatePhoto(data) {
  // const params = new URLSearchParams(data)
  return request({
    url: '/api/user/updatePhoto',
    method: 'post',
    data: data
    // headers: { 'Content-Type': 'multipart/form-data;charset=UTF-8' }
  })
}
