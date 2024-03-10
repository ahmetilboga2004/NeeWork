import { useAuthStore } from '@/stores/auth'

export default async (to, from, next) => {
  const authStore = useAuthStore()

  if (await authStore.checkAuth()) {
    next({ name: 'home' })
    return
  } else {
    next()
    return
  }
}
