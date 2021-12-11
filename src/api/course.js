import request from '@/utils/request'

export function getCourseDetailById(data) {
  return request({
    url: '/api/course/getCourseDetailById',
    method: 'get',
    params: data
  })
}
