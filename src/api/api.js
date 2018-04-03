import * as apis from '../common/apis'
import * as http from '../utils/httpClient'

// 接口调用 =============================================================================================================

/***
 * 获取用户信息
 * @returns {*}
 */
export function createJournal (journal) {
  let url = apis.api(`${apis.CREATE_JOURNAL}`)
  return http.post(url, journal)
}
