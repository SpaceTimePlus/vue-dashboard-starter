# [Vue Paper Dashboard](https://www.creative-tim.com/product/vue-paper-dashboard-pro)

> Admin dashboard based on paper dashboard UI template + vue-router

This project is a vue version of [Paper-dashboard-pro](https://www.creative-tim.com/product/paper-dashboard-pro)
designed for Vue js. The dashboard includes vue-router

Check the [Live Demo here](https://cristijora.github.io/paper-dashboard-pro/#/admin/overview).

![](http://i.imgur.com/3iC1hOs.gif)

## Documentation
Link to [Documentation](https://cristijora.github.io/paper-dashboard-pro/documentation.html?selectedKind=Buttons&selectedStory=Default&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)

## Build Setup

## 开发
```bash
    # 安装依赖
    npm install
    //or yarn
    # 本地开发 开启服务
    npm run dev
```

## 发布
```bash
    # 构建测试环境 带 webpack ananalyzer
    npm run build --report

    # 构建生成环境
    npm run build:prod

    # 发布到测试服务器
    // 需要在 fjpublish.config.js 配置好 ssh
    npm public:sit
```

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 图片 字体等静态资源
│   ├── components             // 全局公用组件   (文件命名：大驼峰命名，即首字母大写+驼峰)
│   ├── directive              // 全局指令
│   ├── filtres                // 全局filter
│   ├── mock                   // mock数据
│   ├── router                 // 路由          （）
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 工具函数
│   ├── views                  // view
│   ├── App.vue                // 入口页面
│   ├── gloablComponents.js    // 全局组件
│   ├── globalApis.js          // 全局api
│   ├── globalDirectives.js    // 全局指令
│   ├── main.js                // 入口 加载组件 初始化等
│   ├── permission.js          // 权限控制 初始用户数据等
│   ├── pollyfills.js          // ES6 promise 等语法预编译
│   └── sidebarLinks.js        // 侧边栏配置文件
├── static                     // 第三方不打包的静态资源
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── .fjpublish.config.js       // 自动化发布服务器 配置
├── index.html                 // html模板
└── package.json               // package.json

```

## 命名规则
命名方式：
1. 文件：主要为驼峰命名，组件文件为：大驼峰命名
2. js:  主要为驼峰命名,ES6模块（import..）为：大驼峰命名
3. router: 路由路径为横线连接（admin-user）
4. vue的命名规范请参考官方：[https://cn.vuejs.org/v2/style-guide/](https://cn.vuejs.org/v2/style-guide/)
5. css命名规范：路由路径为横线连接（warp-user）
