import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/traffic',
      name: 'traffic',
      component: () => import('../views/TrafficDetailView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/state',
      name: 'state',
      component: () => import('../views/NodeStateView.vue')
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: () => import('../views/PurchaseView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserCenter.vue')
    },{
      path: '/func',
      name: 'func',
      children:[{
        path: '/func/chat',
        name: 'chat',
        component: () => import('../views/func/ChatView.vue')
      },{
        path: '/func/note',
        name: 'note',
        component: () => import('../views/func/NoteView.vue')
      }]
    }
  ]
})

export default router
