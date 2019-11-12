import Vue from "vue";
import App from "./App.vue";
import router from "./router";
/* <link rel="stylesheet" href="./lieliu_files/awesome.min.css">
<link rel="stylesheet" href="./lieliu_files/bootstrap.css">
<link rel="stylesheet" href="./lieliu_files/animate.min.css">
<link rel="stylesheet" href="./lieliu_files/font_250416_xrr6wv8ab8.css">
<link rel="stylesheet" href="./lieliu_files/app.css"></link> */
import "./assests/lieliu_files/awesome.min.css";
import "./assests/lieliu_files/bootstrap.css";
import "./assests/lieliu_files/animate.min.css";
import "./assests/lieliu_files/font_250416_xrr6wv8ab8.css";
import "./assests/lieliu_files/app.css";
Vue.config.productionTip = false;

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});
