
// import Vue from'../node_modules/vue/dist/vue'
import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router.js'
var vm=new Vue({
    el:'#app',
    render:c =>c(app),
    router
})


