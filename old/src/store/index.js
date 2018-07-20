import Vue from 'vue';
import Vuex from 'vuex';
// import * as Cookies from 'js-cookie';
// import * as actions from './actions';
// import * as getters from './getters';


import cmsAuth from './cms/auth'
import cmsLanding from './cms/landing'
import cmsPricing from './cms/pricing'
import cmsTest from './cms/testimonials'
import cmsFeat from './cms/features'
import cmsBlog from './cms/blog'


Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
      cmsAuth,
      cmsLanding,
      cmsPricing,
      cmsTest,
      cmsFeat,
      cmsBlog,
    }
  });
  // C:\Users\HP\NatterBase\nesterapp_ui\src\store\modules
  // C:\Users\HP\NatterBase\nesterapp_ui\src\store\index.js
