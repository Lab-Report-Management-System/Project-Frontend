import request from '@/utils/request'

export function getSystemAnnouncement(params) {
  return request({
    url: '/api/announcement/system',
    method: 'post',
    params
  })
}

export function getCourseAnnouncement(params) {
  return request({
    url: '/api/announcement/dashboard/course',
    method: 'post',
    params
  })
}
