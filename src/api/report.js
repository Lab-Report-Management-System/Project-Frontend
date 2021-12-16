import request from '@/utils/request'

export function getReportDetails(params) {
  return request({
    url: '/api/report/getReportDetails',
    method: 'get',
    params: params
  })
}

// 学生获取最近一次实验报告的完成率
export function getCompleteRate(params) {
  return request({
    url: '/api/report/completeRate',
    method: 'get',
    params: params
  })
}

// 老师获得最近一次实验报告的提交率
export function getSubmitRate(params) {
  return request({
    url: '/api/report/finishRate',
    method: 'get',
    params: params
  })
}
