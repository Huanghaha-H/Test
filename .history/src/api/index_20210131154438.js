import request from '../utils/requets'

export function test () {
  return request ({
    url: '/test',
    method: 'get'
  })
}
