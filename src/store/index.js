import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

// 导入模块
import user from './modules/user'
import thirdparty from './modules/thirdparty'

Vue.use(Vuex)

// 不要在生产环境使用严格模式, 这会严重影响应用的整体性能
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug, // true 意味着必须通过 mutation 来修改 state
  plugins: debug ? [createLogger()] : [], // 是否使用日志输出
  modules: {
    user,
    thirdparty
  }
})
