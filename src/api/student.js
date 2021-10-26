import request from '@/utils/request'

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

export function submitLab(params) {
  return request({
    url: '/api/student/submitReport',
    method: 'post',
    headers:{'Content-Type':'application/json;charset=UTF-8'},
    data:JSON.stringify(params)
  })
}