import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import GuestLayout from '../layouts/GuestLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: GuestLayout,   
      children: [
        {
          path: '',
          component: IndexView
        },
        {
          path: '/register',
          name: 'Register',
          component: () => import('../views/auth/Register.vue'),
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('../views/auth/Login.vue'),
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
      ],
    },
  
  ]
})

export default router
