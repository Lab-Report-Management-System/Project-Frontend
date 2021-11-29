import request from '@/utils/request'

export function getBattleQuestion() {
  return request({
    url: '/api/battle/questions',
    method: 'get'
  })
}
