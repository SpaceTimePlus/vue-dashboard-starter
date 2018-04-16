/**
 * Created by athena on 2017/9/14.
 */
import * as api from '../../../api/api'
import * as thirdPartyApi from '../../../api/thirdPartyApi'
import * as types from './mutationTypes'

// 导入绑卡记录
export const importExcel = async ({ commit }, payload) => {
  console.log('importExcel')
  let result = await thirdPartyApi.importExcel(payload.user, payload.excel)
  console.log('result', result)
}

// 绑卡
export const bindCard = async ({ commit }, payload) => {
  let result = await thirdPartyApi.bindCard(payload.user, payload.list)
  console.log('result', result)
}
