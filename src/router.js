import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/rough',
      component: () => import('./views/Rough.vue')
    },
    {
      path: '/lazy',
      component: () => import('./views/Lazy.vue')
    },
    {
      path: '/compressed',
      component: () => import('./views/Compressed.vue')
    },
    {
      path: '/responsive',
      component: () => import('./views/Responsive.vue')
    },
    {
      path: '/webp',
      component: () => import('./views/Webp.vue')
    },
    {
      path: '/cdn',
      component: () => import('./views/Cdn.vue')
    },
    {
      path: '/extra',
      component: () => import('./views/Extra.vue')
    }
  ]
})
