export default [
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
  {
    path: '/system',
    component: () => import('@/views/Dashboard/Layout/DashboardLayout'),
    redirect: '/system/manager',
    children: [
      {
        path: 'manager',
        name: 'Manager',
        component: () => import('@/views/Dashboard/Views/Dashboard/Overview')
      },
      {
        path: 'role',
        name: '角色',
        component: () => import('@/views/System/role')
      }
    ]
  }
]
