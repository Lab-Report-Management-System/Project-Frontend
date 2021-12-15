import request from '@/utils/request'

export function getReportDetails(params) {
  console.log(params)
  return request({
    url: '/api/report/getReportDetails',
    method: 'get',
    params: params
  })
}
