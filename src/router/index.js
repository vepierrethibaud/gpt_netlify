import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/projet/:url',
    name: 'projet',
    component: () => import('../views/Project.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
