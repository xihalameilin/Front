// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';

import store from './store/index'//引入store



Vue.use(store)

Vue.use(iView);
axios.defaults.headers = {
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
}

Vue.prototype.$http=axios



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
