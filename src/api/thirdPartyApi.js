import * as apis from '../common/apis'
import * as http from '../utils/httpClient'

// 接口调用 =============================================================================================================

/***
 * 导入绑卡记录
 * @returns {*}
 */
export function importExcel (user, list) {
  let url = apis.api(`${apis.BIND_CARD}`)
  return http.post(url, list)
}

/***
 * 绑卡
 * @returns {*}
 */
export function bindCard (user, list) {
  let url = apis.api(`${apis.BIND_CARD}`)
  return http.post(url, list)
}
