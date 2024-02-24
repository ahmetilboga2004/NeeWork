import { createRouter, createWebHistory } from 'vue-router'
// ! PAGES COMPONENT
import HomeView from '../views/HomeView.vue'

// ! GUARDS
import isLoggedIn from '@/guard/isLoggedIn'
import checkRole from '@/guard/checkRole'
import requireAuth from '@/guard/requireAuth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: [isLoggedIn]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/f',
      name: 'freelancer',
      component: () => import('../views/FreelancerView.vue'),
      meta: {
        allowedRoles: ['freelancer']
      },
      beforeEnter: [requireAuth, checkRole],
      children: [
        {
          path: '',
          name: 'freelancer-home',
          component: () => import('../views/Freelancer/HomeView.vue')
        },
        {
          path: 'profile',
          name: 'freelancer-profile',
          component: () => import('../views/Freelancer/ProfileView.vue')
        },
        {
          path: 'new-service',
          name: 'new-service',
          component: () => import('../views/Freelancer/NewServiceView.vue')
        },
        {
          path: 'service/:id',
          name: 'service',
          component: () => import('../views/Freelancer/ServiceView.vue')
        },
        {
          path: 'services',
          name: 'services',
          component: () => import('../views/Freelancer/ServicesView.vue')
        },
        {
          path: 'settings',
          name: 'freelancer-settings',
          component: () => import('../views/Freelancer/SettingsView.vue')
        }
      ]
    },
    {
      path: '/c',
      name: 'customer',
      component: () => import('../views/CustomerView.vue'),
      meta: {
        allowedRoles: ['customer']
      },
      beforeEnter: [requireAuth, checkRole],
      children: [
        {
          path: '',
          name: 'customer-home',
          component: () => import('../views/Customer/HomeView.vue')
        },
        {
          path: 'settings',
          name: 'customer-settings',
          component: () => import('../views/Customer/SettingsView.vue')
        },
        {
          path: 'job/:id',
          name: 'job',
          component: () => import('../views/Customer/JobView.vue')
        }
      ]
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/ChatView.vue')
    }
  ]
})

export default router
