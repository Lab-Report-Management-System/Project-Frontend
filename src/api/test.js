import request from '@/utils/request'

export function testForm(data) {
  return request({
    url: '/test',
    method: 'post',
    data
  })
}

export function getForm() {
  return request({
    url: '/test',
    method: 'get'
  })
}
