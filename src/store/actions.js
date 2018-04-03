import * as api from '../api/api'
import * as types from './mutationTypes'

export default {
  // 更新State
  updateState: async ({ commit }, payload) => {
    commit(types.UPDATE_STATE, { obj: payload.obj, prop: payload.prop, value: payload.value })
  },
  // 添加日志
  createJournal: async ({ commit }, payload) => {
    api.createJournal(payload.journal)
  }
}
