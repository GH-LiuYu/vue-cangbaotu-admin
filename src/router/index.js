import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import HelloWorld from "../components/HelloWorld";
import Layout from "../views/layout/Index"
import Upload from "../components/Upload"
import Test from "@/views/test/Test"
const routes = [
  {
    path: '/',
    component: Layout,//布局主页
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',//重定向到index
    children: [
      {
        path: 'index',
        name: '主页',
        meta: { title: '主页' },
        component: () => import('@/views/dashboard/Index'),//这种方式不需要在上面import引入
      }
    ]
  },
  {
    path: '/introduce',
    component: Layout,
    redirect: '/introduce/introduce',//重定向到index
    children: [
      {
        path: 'Introduce',
        name:'主页',
        component: () => import('@/views/introduce/Introduce'),//这种方式不需要在上面import引入
        meta: { title: '主页' }
      }
    ]
  },
  { path: '/helloWorld',
    component: HelloWorld
  },//这种方式需要在上面import引入
  { path: '/upload',
    component: Upload
  },
  { path: '/test',
    component: Test
  },
  {
    path: '/documents',
    component: Layout,
    redirect: '/documents/index',//重定向到index
    children: [
      {
        path: 'index',
        name:'文档资源',
        component: () => import('@/views/documents/Index'),//这种方式不需要在上面import引入
        meta: { title: '文档资源' }
      },
      {
        path: 'add',
        component: () => import('@/views/documents/Add'),//这种方式不需要在上面import引入
      }
    ]
  },
  {
    path: '/errorPage',
    component: Layout,
    redirect: '/errorPage/404',//重定向到index
    children: [
      {
        path: '404',
        meta: { title: '404' },
        name:'404',
        component: () => import('@/views/errorPage/404'),//这种方式不需要在上面import引入
      }
    ]
  },
  {
    path: '/nav',
    component: Layout,
    redirect: '/nav/index',//重定向到index
    children: [
      {
        path: 'index',
        meta: { title: '导航管理' },
        name:'导航管理',
        component: () => import('@/views/nav/Index'),//这种方式不需要在上面import引入
      },
      {
        path: 'add',
        component: () => import('@/views/nav/Add'),//这种方式不需要在上面import引入
      }
    ]
  }

]

const router = new Router({
  routes//注入路由组
})
export default router
