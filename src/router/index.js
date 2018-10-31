import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/index' },
    { name: 'index',
      path: '/index',
      component: resolve => require(['@/components/index.vue'], resolve)
    },
    { name: 'login',
      path: '/login',
      component: resolve => require(['@/components/login.vue'], resolve)
    },    
  ] 
})
