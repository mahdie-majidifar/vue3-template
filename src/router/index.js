import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutDefault from '../layouts/default.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:LayoutDefault,
      children:[
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
      ]
    },
  ]
})

export default router
