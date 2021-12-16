import request from '@/utils/request'

export function getReportDetails(params) {
  return request({
    url: '/api/report/getReportDetails',
    method: 'get',
    params: params
  })
}

export function getCompleteRate(params) {
  return request({
    url: '/api/report/completeRate',
    method: 'get',
    params: params
  })
}
