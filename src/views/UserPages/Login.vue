<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                  @click="toggleNavbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/admin">管理系统</router-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <router-link to="/register" tag="li">
              <a>注册</a>
            </router-link>
            <router-link to="/admin/overview" tag="li">
              <a>首页</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page" data-color=""
           data-image="static/img/background/background-2.jpg">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                <form method="#" action="#">
                  <div class="card" data-background="color" data-color="blue">
                    <div class="card-header">
                      <h3 class="card-title">登录</h3>
                    </div>
                    <div class="card-content">
                      <div class="form-group">
                        <label>账号</label>
                        <input type="text" placeholder="输入用户名/手机号" class="form-control input-no-border">
                      </div>
                      <div class="form-group">
                        <label>密码</label>
                        <input type="password" placeholder="输入密码" class="form-control input-no-border">
                      </div>
                    </div>
                    <div class="card-footer text-center">
                      <button class="btn btn-fill btn-wd" @click="login">登录</button>
                      <div class="forgot" style="margin-top: 10px;font-size: 11px;">
                        <router-link to="/register">
                          没有账号?
                        </router-link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <div class="full-page-background" style="background-image: url(static/img/background/background-2.jpg) "></div>
      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <router-link to="/register" tag="li">
          <a>注册</a>
        </router-link>
        <router-link to="/admin/overview" tag="li">
          <a>首页</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import Footer from '../../components/Footer'
  export default {
    methods: {
      toggleNavbar () {
        document.body.classList.toggle('nav-open')
      },
      closeMenu () {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      },
      login () {
        // 登录
      }
    },
    components: {
      Footer
    },
    beforeDestroy () {
      this.closeMenu()
    }
  }
</script>
<style>
</style>
