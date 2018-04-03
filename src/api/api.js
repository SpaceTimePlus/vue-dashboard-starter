import * as apis from '../common/apis'
import * as http from '../utils/httpClient'

// 接口调用 =============================================================================================================

/***
 * 通用GET请求
 * @returns {*}
 */
export function get (url) {
  return http.get(url)
}

/***
 * 通用POST请求
 * @returns {*}
 */
export function post (url, data) {
  return http.post(url, data)
}

/***
 * 通用PUT请求
 * @returns {*}
 */
export function put (url, data) {
  return http.put(url, data)
}

/***
 * 通用DELETE请求
 * @returns {*}
 */
export function del (url) {
  return http.del(url)
}

/***
 * 写入日志信息
 * @returns {*}
 */
export function createJournal (journal) {
  let url = apis.api(`${apis.CREATE_JOURNAL}`)
  return http.post(url, journal)
}
