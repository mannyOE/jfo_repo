import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// import * as Cookies from 'js-cookie';
// import * as actions from './actions';
// import * as getters from './getters';


import volunteer from './volunteer'

Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: []
 })
],
    modules: {
      volunteer,
      
    }
  });
  // C:\Users\HP\NatterBase\nesterapp_ui\src\store\modules
  // C:\Users\HP\NatterBase\nesterapp_ui\src\store\index.js
