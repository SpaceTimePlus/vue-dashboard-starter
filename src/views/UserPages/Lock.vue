<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button"
                  class="navbar-toggle"
                  @click="toggleNavbar"
                  data-toggle="collapse"
                  data-target="#navigation-example-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/admin">管理系统</router-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">

          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="full-page lock-page" data-color="green" data-image="static/img/background/background-5.png"
           style="background-image: url('static/img/background/background-5.png')">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <form method="#" action="#">
            <div class="card card-lock">
              <div class="author">
                <img class="avatar" src="static/img/faces/face-2.jpg" alt="...">
              </div>
              <h4>Da Hui</h4>
              <div class="form-group">
                <input type="password" placeholder="输入密码" class="form-control">
              </div>
              <button type="button" class="btn btn-wd">解锁</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <li>
          <router-link to="/admin">
            首页
          </router-link>
        </li>
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
