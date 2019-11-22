import Vue from "vue";
// import ElementUI from 'element-ui';
import './elementImport.js';
import './antvueImport.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Velocity from 'velocity-animate';
import App from "./App.vue";
import router from "./router";
import "./assests/lieliu_files/animate.min.css";
// import './elementFF6600/index.css';
import "./plugins/element.js";
import "./plugins/ant-design-vue.js";
import moment from "moment";
import VueJsonp from "vue-jsonp";
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper);
Vue.use(VueJsonp);
window.Jsonp = Vue.jsonp;
// Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$log = window.console.log;
Vue.prototype.$moment = moment;
Vue.prototype.$velocity = Velocity;
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});