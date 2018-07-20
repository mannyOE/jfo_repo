// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import store from '@/store'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios'

// Import the bootstarp from the assets
require('./assets/assets/vendor/bootstrap/css/bootstrap.min.css')
require('./assets/assets/fonts/font-awesome/css/font-awesome.min.css')
require('./assets/assets/css/boomerang-startup-analitycs.min.css')
require('./assets/assets/vendor/swiper/css/swiper.min.css')
require('./assets/assets/css/custom-style.css')

Vue.config.productionTip = false;

import ElementUI from 'element-ui'

// Import the el's from the chalk

import 'element-ui/lib/theme-chalk/index.css'

// Import the el's from the chalk
import locale from 'element-ui/lib/locale/lang/en'



Vue.use(ElementUI, { locale })
require('./assets/assets/vendor/jquery/jquery.min.js')
require('./assets/assets/vendor/bootstrap/js/boots.js')


Vue.use(axios)

export const eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
