/**
 * 全站路由配置
 * 代码中路由统一使用path属性跳转
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 保存原本的push
const routerPush = Router.prototype.push
// 对原本的push方法进行重定义：当调用this.$router.push(location)时候，出现错误不抛出，而是返回Promise对象通过catch处理。
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

// 开发环境不使用懒加载
// 使用require对import进行拼接
const _import = require('./import-' + process.env.NODE_ENV)
// 全局路由
const globalRoutes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path: '/login',
        component: _import('login/index'),
        name: 'login',
        meta: {title: '登录'}
    }
]



const router = new Router({
  mode: 'hash',
  //切换路由时页面滚动到顶部
  scrollBehavior: () => ({y: 0}),
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
  //把全局路由和主入口路由合并
  routes: globalRoutes
})

export default router