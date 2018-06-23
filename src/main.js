// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate';
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
require('./assets/bootstrap/css/bootstrap.min.css')
require('./assets/css/font-awesome.min.css')
require('./assets/css/animate.css')
require('./assets/js/boots.js')
require('./assets/js/jqey.js')
require('./api')

import store from './store'

Vue.use(Notifications);
// import Store from '@/store'
Vue.use(Vuex)
Vue.use(VeeValidate);
Vue.use(VueAxios, axios)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
 Vue.prototype.$show_notification = function(msg, type, duration){
      var data = {type: type || "success", title: msg};
      if(duration)
        data.duration = duration;

      Vue.prototype.$notify(data)
    };
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})
