/*
* 全局api定义
*/
const api = {
  /*
  * localStorage  Api
  */
  setLocalStorage (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  getLocalStorage (value) {
    return JSON.parse(window.localStorage.getItem(value))
  },
  removeLocalStorage (key) {
    window.localStorage.removeItem(key)
  },
  clearLocalStorage () {
    window.localStorage.clear()
  },
  /*
  * SessionStorage  Api
  */
  setSessionStorage (key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  },
  getSessionStorage (value) {
    return JSON.parse(window.sessionStorage.getItem(value))
  },
  removeSessionStorage (key) {
    window.sessionStorage.removeItem(key)
  },
  clearSessionStorage () {
    window.sessionStorage.clear()
  }
}

const globalApi = {
  install (Vue, options) {
    Vue.prototype.$globalApi = api
  }
}

export default globalApi
