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
    { path: '/home', component: Home, meta: { show: true } },
    { path: '/login', component: Login, meta: { show: false } },
    { path: '/register', component: Register, meta: { show: false } },
    {
      path: '/search/:keyword?', component: Search, meta: { show: true }, name: 'search',
      // 路由组件能不能传递props数据？
      // 1.布尔值写法： params参数
      // props: true
      // 2.对象写法：添加额外的属性
      // props: {
      //   a: 2,
      //   b: 3
        
      // }
      // 3.函数写法：传递params和query参数
      props: ($route) => {
        return {
          keyword: $route.params.keywords,
          k: $route.query.k
        }
      }
    },
    // 配置重定向
    { path: '/', redirect: '/home' }
  ]
})
