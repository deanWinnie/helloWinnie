
// import Vue from'../node_modules/vue/dist/vue'
import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import { Header } from 'mint-ui'
// import Header from 'mint-ui/lib/header';
// import 'mint-ui/lib/header/style.css'
// Vue.component(Button.name, Button);
Vue.component(Header.name, Header)
Vue.use(VueRouter);
import './lib/mui/css/mui.min.css'
var vm=new Vue({
    el:'#app',
    render:c =>c(app)
})


