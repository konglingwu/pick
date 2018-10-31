import { fetch } from '@/axios/index'

// 登录
export function login(query) {
    return fetch({
      url: '/login',
      method: 'POST',
      params:query
    })
  }

// 验证码
// export function captchas(query) {
//   return fetch({
//     url: `/captchas?width=100&height=36&random=${Math.random()}`,
//     method: 'POST',
//     params:query
//   })
// }