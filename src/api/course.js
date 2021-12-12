import request from '@/utils/request'

export function getCourseDetailById(data) {
  return request({
    url: '/api/course/getCourseDetailById',
    method: 'get',
    params: data
  })
}

// 学生首页课程信息
export function getTeacherAndCourse(data) {
  return request({
    url: '/api/course/student/home',
    method: 'post',
    params: data
  })
}

// 根据实验ID查找课程
export function getCourseByLabId(data) {
  return request({
    url: 'api/course/labId',
    method: 'get',
    params: data
  })
}
