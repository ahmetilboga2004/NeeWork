import { useAuthStore } from '@/stores/auth'

export default async (to, from, next) => {
  const roles = to.meta.allowedRoles
  const authStore = useAuthStore()
  const userRole = authStore.user.role
  await authStore.checkAuth()
  if (userRole) {
    if (!roles || !roles.includes(userRole)) {
      next({ name: 'home' })
      return
    } else {
      next()
      return
    }
  } else {
    next({ name: 'login' })
    return
  }
}
