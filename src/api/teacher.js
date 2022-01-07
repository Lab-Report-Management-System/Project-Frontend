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

export function getRawGrades(params) {
  // const params = new URLSearchParams(data)
  return request({
    url: '/api/teacher/getRawGrades',
    method: 'get',
    params
  })
}

export function checkinStudent(params) {
  // const params = new URLSearchParams(data)
  return request({
    url: '/api/teacher/checkinStudent',
    method: 'get',
    params
  })
}

export function postStudentGrades(data) {
  // const params = new URLSearchParams(data)
  return request({
    url: '/api/teacher/postStudentGrades',
    method: 'post',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    params: JSON.stringify(data)
    // params
  })
}
// /api/teacher/postStudentGrades POST
// tableData(String)
// /api/teacher/getRawGrades GET// courseId(int)
