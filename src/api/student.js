import request from '@/utils/request'

export function sendStudentRegisterEmail(data) {
  const params = new URLSearchParams(data)
  return request({
    url: '/api/student/sendRegisterEmail',
    method: 'post',
    data: params
  })
}

export function studentLogin(data) {
  const params = new URLSearchParams(data)
  return request({
    url: '/api/student/login',
    method: 'post',
    data: params
  })
}
