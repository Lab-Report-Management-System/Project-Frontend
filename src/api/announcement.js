import request from '@/utils/request'

export function getSystemAnnouncement(params) {
  return request({
    url: '/api/announcement/system',
    method: 'post',
    params
  })
}

export function getCourseAnnouncementOfStu(params) {
  return request({
    url: '/api/announcement/student/course',
    method: 'post',
    params
  })
}
