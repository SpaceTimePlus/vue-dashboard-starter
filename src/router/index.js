import Vue from 'vue'
import Router from 'vue-router'

import userPages from './userPages'
import sidebarPages from './sidebarPages'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('@/views/UserPages/Login'),
    name: '登录',
    meta: {
      title: '登录'
    },
    redirect: '/login'
  },
  ...userPages,
  ...sidebarPages,
  { path: '*', component: () => import('@/views/GeneralViews/NotFoundPage') }
]

export default new Router({
  routes: routes,
  linkActiveClass: 'active'
})
