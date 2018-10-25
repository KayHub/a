

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/Home.vue'
import Select from './components/Select.vue'
import Content from './components/Select/Content.vue'
export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home, meta: { keepAlive: true }, name: 'home' },
        { path: '/select', component: Select, meta: { keepAlive: false } },
        { path: '/select/content/:id', component: Content, meta: { keepAlive: false, animate: true } },
    ]
})