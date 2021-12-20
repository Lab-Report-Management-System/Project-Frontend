
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
    url: '/api/student/stuInfo',
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
  data.studentPassword = require('js-sha256').sha256(data.studentPassword)
  // console.log(data)
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

export function getReportState(params) {
  return request({
    url: '/api/student/getReportState',
    method: 'get',
    params
  })
}

export function getLabReportId(params) {
  return request({
    url: '/api/student/getLabReportId',
    method: 'get',
    params
  })
}
