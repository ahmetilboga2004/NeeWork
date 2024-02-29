import { createRouter, createWebHistory } from 'vue-router'
// ! PAGES COMPONENT
import HomeView from '../views/HomeView.vue'

// ! GUARDS
// import isLoggedIn from '@/guard/isLoggedIn'
import checkRole from '@/guard/checkRole'
import requireAuth from '@/guard/requireAuth'
import logout from '@/guard/logout'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter: logout
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
          path: 'home',
          name: 'f-home',
          component: () => import('../views/Freelancer/HomeView.vue')
        },
        {
          path: ':username',
          name: 'f-profile',
          component: () => import('../views/Freelancer/ProfileView.vue')
        },
        {
          path: 'new-service',
          name: 'new-service',
          component: () => import('../views/Freelancer/NewServiceView.vue')
        },
        {
          path: ':username/service/:id',
          name: 'service',
          component: () => import('../views/Freelancer/ServiceView.vue'),
          meta: {
            allowedRoles: ['freelancer', 'customer']
          },
          beforeEnter: checkRole
        },
        {
          path: 'services',
          name: 'services',
          component: () => import('../views/Freelancer/ServicesView.vue')
        },
        {
          path: 'settings',
          name: 'f-settings',
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
          name: 'c-home',
          component: () => import('../views/Customer/HomeView.vue')
        },
        {
          path: 'settings',
          name: 'c-settings',
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
router.beforeEach((to, from, next) => {
  if (to.name === 'service') {
    console.log(to.params, to.fullPath, to.matched, to.path)
    next()
    return
  }
  next()
  return
})

export default router
