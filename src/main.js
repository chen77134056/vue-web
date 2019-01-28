// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Appvv from './App123'
import router from './router/index'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueCookies from 'vue-cookies'
import VueSession from 'vue-session'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueCookies)
Vue.use(VueSession)
/* eslint-disable no-new */

var store=new Vuex.Store({
  state:{
    a:111
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { Appvv },
  template: '<Appvv/>'
})
