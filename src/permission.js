/**
 * permission
 */
import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

const whiteList = ['/start', '/login', '/register', '/lock'] // 不需要权限验证拦截的白名单路由

router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress
  // if (localStorage.getItem('Authorization')) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next('/login')
  //     NProgress.done()
  //   }
  // }
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
