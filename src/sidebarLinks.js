export default [
  {
    name: '系统设置',
    icon: 'ti-gift',
    children: [{
      name: '用户管理',
      path: '/system/manager'
    },
    {
      name: '角色管理',
      path: '/system/role'
    },
    {
      name: '分支机构',
      path: '/login'
    },
    {
      name: '抵押类型',
      path: '/register'
    }
    ]
  },
  {
    name: '首页',
    icon: 'ti-panel',
    collapsed: false,
    children: [{
      name: '概览',
      path: '/admin/overview'
    },
    {
      name: 'Stats',
      path: '/admin/stats'
    }]
  },
  {
    name: '贷前管理',
    icon: 'ti-package',
    children: [{
      name: 'Buttons',
      path: '/components/buttons'
    },
    {
      name: 'Grid System',
      path: '/components/grid-system'
    },
    {
      name: 'Panels',
      path: '/components/panels'
    },
    {
      name: 'Sweet Alert',
      path: '/components/sweet-alert'
    },
    {
      name: 'Notifications',
      path: '/components/notifications'
    },
    {
      name: 'Icons',
      path: '/components/icons'
    },
    {
      name: 'Typography',
      path: '/components/typography'
    }]
  },
  {
    name: '贷中管理',
    icon: 'ti-clipboard',
    children: [{
      name: '面审',
      path: '/forms/regular'
    },
    {
      name: '签约',
      path: '/forms/extended'
    },
    {
      name: '设备安装',
      path: '/forms/validation'
    },
    {
      name: '家访',
      path: '/forms/wizard'
    },
    {
      name: '履约',
      path: '/forms/wizard'
    }
    ]
  },
  {
    name: '贷后服务',
    icon: 'ti-view-list-alt',
    collapsed: true,
    children: [{
      name: '还款监控',
      path: '/table-list/regular'
    },
    {
      name: '异常处理',
      path: '/table-list/extended'
    }
    ]
  },
  {
    name: '营销推广',
    icon: 'ti-map',
    children: [{
      name: '红包发放',
      path: '/maps/google'
    },
    {
      name: '好友助力',
      path: '/maps/full-screen'
    }
    ]
  },
  {
    name: '数据统计',
    icon: 'ti-gift',
    path: '/charts'
  },
  {
    name: '资产管理',
    icon: 'ti-gift',
    children: [{
      name: '资金',
      path: '/pages/user'
    },
    {
      name: '抵押物',
      path: '/pages/timeline'
    }
    ]
  }
]
