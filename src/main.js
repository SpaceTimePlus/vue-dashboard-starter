import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueNotify from 'vue-notifyjs'
import VeeValidate from 'vee-validate'
import lang from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
import App from './App.vue'
import ElementUI from 'element-ui'

import './assets/sass/paper-dashboard.scss'
import './assets/sass/element_variables.scss'
import './assets/sass/index.scss'

// 离线存储
import localforage from 'localforage'

// Plugins
import GlobalComponents from './gloablComponents'
import GlobalDirectives from './globalDirectives'
import GlobalApis from './globalApis'
// 侧边栏
import SideBar from './components/UIComponents/SidebarPlugin'
// router setup
import router from './router'
// 权限、路由拦截
import './permission'

// Vuex setup
import store from './store'
// 侧边栏
import sidebarLinks from './sidebarLinks'

// 判断是否开发环境
const debug = process.env.NODE_ENV !== 'production'

// plugin setup
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(GlobalDirectives)
Vue.use(GlobalComponents)
Vue.use(GlobalApis)
Vue.use(VueNotify)
Vue.use(VeeValidate)
// 侧边栏插件
Vue.use(SideBar, { sidebarLinks: sidebarLinks, title: 'HT', backgroundColor: 'black', activeColor: 'success', logo: '' })
// 本地化
locale.use(lang)
// 本地存储
Vue.use(localforage)

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = debug
// 开启debug模式
Vue.config.debug = debug
// 是否压制警告信息
Vue.config.silent = debug
// 是否关闭调试工具
Vue.config.devtools = debug

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
