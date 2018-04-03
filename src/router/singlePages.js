export default [
  {
    path: '/login',
    name: '登录页',
    component: () => import('@/views/userPages/Login')
  },
  {
    path: '/register',
    name: '注册页',
    component: () => import('@/views/userPages/Register')
  },
  {
    path: '/lock',
    name: 'lock',
    component: () => import('@/views/userPages/Lock')
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

export const Login = {
  path: '/login',
  name: '登录页',
  component: () => import('@/views/userPages/Login')
}
