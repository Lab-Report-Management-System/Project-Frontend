import request from '@/utils/request'

export function getCourseIds() {
  return request({
    url: '/api/teacher/getCourseIds',
    method: 'get'
  })
}

export function postReportMarks(data) {
  const params = new URLSearchParams(data)
  return request({
    url: '/api/teacher/postReportMarks',
    method: 'post',
    data: params
  })
}
