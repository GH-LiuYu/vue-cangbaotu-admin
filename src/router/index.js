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
        component: () => import('@/views/dashboard/Index'),//这种方式不需要在上面import引入
      }
    ]
  },
  {
    path: '/introduce',
    component: Layout,
    redirect: '/introduce/introduce',//重定向到index
    name:'intro',
    meta: { title: '简介' },
    children: [
      {
        path: 'Introduce',
        name:'intro1',
        component: () => import('@/views/introduce/Introduce'),//这种方式不需要在上面import引入
        meta: { title: '简介1' }
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
    redirect: '/documents/Index',//重定向到index
    meta: { title: '文档' },
    name:'docname',
    children: [
      {
        path: 'Index',
        name:'docnameindex',
        component: () => import('@/views/documents/Index'),//这种方式不需要在上面import引入
        meta: { title: '文档2' }
      }
    ]
  },
  {
    path: '/errorPage',
    component: Layout,
    redirect: '/errorPage/404',//重定向到index
    meta: { title: '404' },
    name:'404',
    children: [
      {
        path: '404',
        meta: { title: '404' },
        name:'404',
        component: () => import('@/views/errorPage/404'),//这种方式不需要在上面import引入
      }
    ]
  }

]

const router = new Router({
  routes//注入路由组
})
export default router
