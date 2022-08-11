import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'

//使用路由
Vue.use(VueRouter)
// 引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
// 向外暴露
export default new VueRouter({
  // 配置路由
  routes: [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/search', component: Search },
    // 配置重定向
    {path : '/' , redirect : '/home'}
  ]
})