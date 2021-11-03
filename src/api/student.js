
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
}

export function getStuInfo(params) {
  return request({
    url: '/api/stuInfo',
    method: 'get',
    params
  })
}
// /student/reportDetails

export function getStuLabInfo(params) {
  return request({
    url: '/api/student/reportDetails',
    method: 'get',
    params
  })
}

export function studentRegister(data) {
  const params = new URLSearchParams(data)
  return request({
    url: '/api/student/updateInformation',
    method: 'post',
    data: params
  })
}

export function submitLab(params) {
  return request({
    url: '/api/student/submitReport',
    method: 'post',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    data: JSON.stringify(params)
  })
}
