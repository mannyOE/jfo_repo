import axios from 'axios';
import Vue from 'vue'


 // export const API = 'http://localhost:8000/'
export const API = process.env.API || 'http://nester.com.ng:3000/';
export const APIS = process.env.API || 'http://nester.com.ng/';

Vue.prototype.$API = API;
Vue.prototype.$APIS = APIS;
 
export var Axios = axios.create({
  baseURL: API
});

// module.exports = {
//     API,
//     // blackAxios: defAxios,
// };
  