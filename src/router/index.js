import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SayHiFromMethod from '../views/SayHiFromMethod.vue'
import SayHiFromVariable from '../views/SayHiFromVariable.vue'
import FormInput from '../views/FormInput.vue'
import ApplicationConfig from '../views/ApplicationConfig.vue'

import ProvideLevelOne from '@/views/ProvideLevelOne'
import ProvideLevelTwo from '@/components/ProvideLevelTwo'
import ProvideLevelThree from '@/components/ProvideLevelThree'
import CompositionApiProvideLevelOne from '@/views/CompositionApiProvideLevelOne'
// import CompositionApiProvideLevelOneReactive from '@/views/CompositionApiProvideLevelOneReactive'
// 增加这一行, 作用是引入src/views/SayHi.vue这个文件
import Hello from '../views/Hello.vue'
import SayHi from '../views/SayHi.vue'
import BlogList from '../views/BlogList.vue'
import Blog from '../views/Blog.vue'
import TwoWayBinding from '@/views/TwoWayBinding'
import SayHiFromMixin from '@/views/SayHiFromMixin'
import ShowCounter1 from '@/views/ShowCounter1'
import ShowCounter2 from '@/views/ShowCounter2'
import { createApp } from 'vue'


const routes = [
  {
    path: '/application_config',
    name: 'ApplicationConfig',
    component: ApplicationConfig
  },
  {
    path: '/show_counter_1',
    name: 'ShowCounter1',
    component: ShowCounter1
  },
  {
    path: '/show_counter_2',
    name: 'ShowCounter2',
    component: ShowCounter2
  },
  {
    path: '/say_hi_from_mixin',
    name: 'SayHiFromMixin',
    component: SayHiFromMixin
  },
  {
    path: '/providelevelone',
    name: 'ProvideLevelOne',
    component:ProvideLevelOne
  },
  {
    path: '/provideleveltwo',
    name: '/ProvideLevelTwo',
    component:ProvideLevelTwo
  },
  {
    path: '/providelevelthree',
    name: 'ProvideLevelThree',
    component: ProvideLevelThree
  },
  {
    path: '/compositionapiprovidelevelone',
    neme: 'CompositionApiProvideLevelOne',
    component: CompositionApiProvideLevelOne
  },
//  {
 //   path: 'compositionapiprovidelevelonereactive',
  //  name: 'ComposirionApiProvideLevelOneReactive',
   // component: CompositionApiProvideLevelOneReactive
//  },
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
    name: 'Blog',
    component: Blog
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

const app = createApp({})
// 这里对api进行设置
export default router
