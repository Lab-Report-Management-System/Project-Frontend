import request from '@/utils/request'

export function testPost(data) {
  return request({
    url: '/testPost',
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
