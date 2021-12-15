import request from '@/utils/request'

export function getCourseIds() {
  return request({
    url: '/api/teacher/getCourseIds',
    method: 'get'
  })
}

