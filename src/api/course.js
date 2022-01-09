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
    url: '/api/course/home',
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

export function getForumDetails(params) {
  return request({
    url: '/api/course/getForumDetails',
    method: 'get',
    params
  })
}

export function submitForum(data) {
  const params = new URLSearchParams(data)
  return request({
    url: '/api/course/submitComment',
    method: 'post',
    data: params
  })
}

export function createState(data) {
  const params = new URLSearchParams(data)
  return request({
    url: '/api/course/createState',
    method: 'post',
    data: params
  })
}
