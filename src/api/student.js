import request from '@/utils/request'

export function studentLogin(data) {
  const params = new URLSearchParams(data)
  return request({
    url: '/api/student/login',
    method: 'post',
    data: params
  })
}
