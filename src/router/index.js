import Aboutview from '@/views/Aboutview.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/about',
      name: 'about',
      component: Aboutview
    },{
      path:'/contact',
      name: 'contact',
      component: Aboutview
    },{
      path:'/blogs',
      name: 'blogs',
      component: Aboutview
    }
  ],
})

export default router
