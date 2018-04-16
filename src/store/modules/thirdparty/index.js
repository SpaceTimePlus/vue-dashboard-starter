/**
 * Created by athena on 2017/9/14.
 */
import createLogger from 'vuex/dist/logger'
// 业务对象
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

// 不要在生产环境使用严格模式, 这会严重影响应用的整体性能
const debug = process.env.NODE_ENV !== 'production'

// 应用程序的统一状态数据存储
const thirdparty = {
  state,
  actions,
  getters,
  mutations,
  strict: debug, // true 意味着必须通过 mutation 来修改 state
  plugins: debug ? [createLogger()] : [] // 是否使用日志输出
}

export default thirdparty
