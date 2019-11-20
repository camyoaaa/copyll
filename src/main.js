import Vue from "vue";
// import ElementUI from 'element-ui';
import './elementImport.js';
import './antvueImport.js';
import App from "./App.vue";
import router from "./router";
import "./assests/lieliu_files/awesome.min.css";
import "./assests/lieliu_files/bootstrap.css";
import "./assests/lieliu_files/animate.min.css";
import "./assests/lieliu_files/font_250416_xrr6wv8ab8.css";
import 'element-ui/lib/theme-chalk/index.css';
import "./assests/lieliu_files/app.css";
// import './elementFF6600/index.css';
import "./plugins/element.js";
import "./plugins/ant-design-vue.js";
import moment from "moment";
import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp);
window.Jsonp = Vue.jsonp;
// Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$log = window.console.log;
Vue.prototype.$moment = moment;
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});