import Vue from 'vue'
import Router from 'vue-router'
import BrandList from '@/components/BrandList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BrandList',
      component: BrandList
    }
  ]
})
