
import 'lib-flexible/flexible.js'
// import './lib/css/flexible.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.less'

import Vue from 'vue'

import axios from 'axios'
Vue.prototype.$axios = axios

// Vue.component(Indicator.name, Indicator)

import App from './App.vue'
import router from './router';




const vm = new Vue({
    el: '#application',
    data: {},
    methods: {},
    render(c) { 
        return c(App)
    },
    router,
})
