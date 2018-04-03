import Vue from 'vue'
import Router from 'vue-router'

import pages from './singlePages' // 单页面模块 login、register/lock.....
import { Login } from './singlePages'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Login,
    name: '登录',
    meta: {
      title: '登录'
    },
    redirect: '/login'
  },
  {
    path: '/admin',
    component: () => import('@/views/Dashboard/Layout/DashboardLayout'),
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('@/views/Dashboard/Views/Dashboard/Overview')
      },
      {
        path: 'stats',
        name: 'Stats',
        component: () => import('@/views/Dashboard/Views/Dashboard/Stats')
      }
    ]
  },
  ...pages,
  { path: '*', component: () => import('@/views/GeneralViews/NotFoundPage') }
]

export default new Router({
  routes: routes,
  linkActiveClass: 'active'
})
