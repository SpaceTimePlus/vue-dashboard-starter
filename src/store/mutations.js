import * as types from './mutationTypes'
import { set } from 'vue'

export default {
  // 更新 state
  [types.UPDATE_STATE] (state = {}, { obj, prop, value }) {
    set(obj, prop, value)
  }
}
