export default [
  {
    path: '/login',
    name: '登录页',
    component: () => import('@/views/Dashboard/Views/Pages/Login')
  },
  {
    path: '/register',
    name: '注册页',
    component: () => import('@/views/Dashboard/Views/Pages/Register')
  },
  {
    path: '/lock',
    name: 'lock',
    component: () => import('@/views/Dashboard/Views/Pages/Lock')
  },
  {
    path: '/timeline',
    name: '时间线',
    component: () => import('@/views/Dashboard/Views/Pages/TimeLinePage')
  },
  {
    path: '/userprofile',
    name: '用户主页',
    component: () => import('@/views/Dashboard/Views/Pages/TimeLinePage')
  }
]
