// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/css/reset.css'
import '../static/js/rem'

import baseJS from './api'
Vue.prototype.baseJs = baseJS

Vue.config.productionTip = false


// 使用MintUi框架
import Mint from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
  components: { App },
  template: '<App/>'
})
