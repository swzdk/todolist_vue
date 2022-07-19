// 引入VueRouter
import VueRouter from 'vue-router'
import Vue from 'vue'

// 注册VueRouter
Vue.use(VueRouter)

// 制定路由规则
const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/',
        component: () => import('@/views/All')
      },
      {
        path: '/all',
        component: () => import('@/views/All')
      },
      {
        path: '/active',
        component: () => import('@/views/Active')
      },
      {
        path: '/completed',
        component: () => import('@/views/Completed')
      }
    ]
  }
]
// 规则导入VueRouter实例
const router = new VueRouter({
  routes
})
// 导出VueRouter实例
export default router
