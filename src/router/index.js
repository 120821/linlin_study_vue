import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SayHiFromMethod from '../views/SayHiFromMethod.vue'
import SayHiFromVariable from '../views/SayHiFromVariable.vue'
import FormInput from '../views/FormInput.vue'
// 增加这一行, 作用是引入src/views/SayHi.vue这个文件
import Hello from '../views/Hello.vue'
import SayHi from '../views/SayHi.vue'
import BlogList from '../views/BlogList.vue'
import Blog from '../views/Blog.vue'
import TwoWayBinding from '@/views/TwoWayBinding'

const routes = [
  {
    path: '/form_input',
    name: 'FormInput',
    component:FormInput
  },
  {
    path: '/two_way_binding',
    name: 'TwoWayBinding',
    component: TwoWayBinding
  },
  {
    path: '/blogs',
    name: 'BlogList',
    component: BlogList
  },
  {
    path:'/blog',
    name: 'blog',
    component: Blog
  },
  {
    path:'/blog/:id',
    name:'/Blog'
  },
  {
    path: '/hello',
    component: Hello
  },

  {
    path: '/hello2',
    component: Hello
  },

  {
    path: '/',
    name: 'Home',
    component: Home
  },

   {
      path: '/say_hi',
      name: 'SayHi',
      component: SayHi
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
