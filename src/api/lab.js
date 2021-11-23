import request from '@/utils/request'

export function getLabInfo(params) {
  return request({
    url: '/api/calendar/labs',
    method: 'post',
    params
  })
}
