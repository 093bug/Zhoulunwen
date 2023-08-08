import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: () => import('@/components/aboutMe/aboutMe')
    },
    {
    path: '/teach',
    name: 'teach',
    component: () => import('@/components/teach/teach')
    },
    {
      path: '/Info',
      name: 'Info',
      component: () => import('@/components/information/Info')
    },
    {
      path: '/EduInfo',
      name: 'EduInfo',
      component: () => import('@/components/FurtherEduInfo/EduInfo')
    },
    {
      path: '/itemBank',
      name: 'itemBank',
      component: () => import('@/components/itemBank/itemBank')
    }
  ]
})
