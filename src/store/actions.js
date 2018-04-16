import * as api from '../api/api'
import * as types from './mutationTypes'

// 更新State
export const updateState = async ({ commit }, payload) => {
  commit(types.UPDATE_STATE, { obj: payload.obj, prop: payload.prop, value: payload.value })
}

// 添加日志
export const createJournal = async ({ commit }, payload) => {
  api.createJournal(payload.journal)
}

/** **************************************************** 阿里云 ************************************************************ **/

// 阿里云 STS
export const aliyunSts = async ({ commit }, payload) => {
  let result = await api.aliyunSts()
  if (result && result.head.code === 1) {
    return result.body.data
  }
}

// 阿里云 Signatrue
export const aliyunSignatrue = async ({ commit }, payload) => {
  let result = await api.aliyunSignatrue()
  if (result && result.head.code === 1) {
    return result.body.data
  }
}
