export default [
  {
    path: '/login',
    name: '登录页',
    component: () => import('@/views/UserPages/Login')
  },
  {
    path: '/register',
    name: '注册页',
    component: () => import('@/views/UserPages/Register')
  },
  {
    path: '/lock',
    name: 'lock',
    component: () => import('@/views/UserPages/Lock')
  },
  // {
  //   path: '/timeline',
  //   name: '时间线',
  //   component: () => import('@/views/userPages/TimeLinePage')
  // },
  // {
  //   path: '/userprofile',
  //   name: '用户主页',
  //   component: () => import('@/views/userPages/UserProfile')
  // }
]
