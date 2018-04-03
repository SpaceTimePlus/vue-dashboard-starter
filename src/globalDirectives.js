import { directive } from 'vue-clickaway'
/**
 * 全局指令定义
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
  install (Vue) {
    Vue.directive('click-outside', directive)
  }
}

export default GlobalDirectives
