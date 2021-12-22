import request from '@/utils/request'

export function getBattleQuestion() {
  return request({
    url: '/api/battle/questions',
    method: 'get'
  })
}

export function submitQuestion(params) {
  return request({
    url: '/api/battle/submitQuestion',
    method: 'post',
    params
  })
}
