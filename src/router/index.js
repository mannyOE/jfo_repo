 import Vue from 'vue'
import Router from 'vue-router'

import HomeLayout from '@/components/layouts/homeLayout'
import AdminLayout from '@/components/layouts/cmsLayout'


import DonatePage from '@/components/pages/donate'
import VolunteerPage from '@/components/pages/volunteer'
import HomePage from '@/components/pages/home'
import cmsHome from '@/components/pages/cms_home'
import cmsBlog from '@/components/pages/cms_blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomeLayout,
      redirect: {name: 'home'},
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage
        },
        {
          path: 'blog',
          name: 'blog',
          component: HomePage
        },
        {
          path: 'volunteer',
          name: 'volunteer',
          component: VolunteerPage
        },
        {
          path: 'donate',
          name: 'donate',
          component: DonatePage
        }
      ]
    },
    {
      path: '/cms',
      name: 'cms-page',
      component: AdminLayout,
      redirect: {name: 'cms-home'},
      children: [
        {
          path: '',
          name: 'cms-home',
          component: cmsHome
        },
        {
          path: 'blog',
          name: 'cms-blog',
          component: HomePage
        }
      ]
    }        
  ]
})
