// 前端自动化发布
module.exports = {
  modules: [{
    name: '开发环境',
    env: 'sit',
    ssh: {
      host: '123.57.61.147',
      port: 22,
      user: 'root',
      username: 'root',
      password: '****'
    },
    buildCommand: 'sit',
    localPath: 'dist',
    remotePath: '/opt/vue/test'
  }, {
    name: '正式环境',
    env: 'prod',
    ssh: {
      host: '123.57.61.147',
      port: 22,
      user: 'root',
      username: 'root',
      password: '****'
    },
    buildCommand: 'build',
    localPath: 'dist',
    remotePath: '/opt/vue/pro'
  }],
  // global参数
  tag: 'v1.0' // 版本号
}
