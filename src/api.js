var port = '';
//port = 8000; //test
//port = 8001; //demo
//port = 8002; //live
var prot = 'https://';
var hostname = process.env.LOCAL===1?'localhost':location.hostname;
hostname = hostname.toLowerCase();


if(hostname == "babajfo4houseofrepresentatives.com" || hostname == "www.babajfo4houseofrepresentatives.com"){
    port = 2300;
    prot = "http://"

}else if(hostname === 'localhost'){
    hostname = "localhost";
    port = 2300;
    prot = "http://"
}else{
    hostname = "test.zeedas.com";
    port = 8000;
    prot = "http://"
}


import axios from 'axios';
import Vue from 'vue'
export const API = prot+hostname+":"+port+"/";
console.log("Connecting API: "+ API);

export var blackAxios = axios.create({
  baseURL: API
});
Vue.prototype.$API = API;

