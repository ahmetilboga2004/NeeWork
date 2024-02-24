import { useAuthStore } from '@/stores/auth'

export default async (to, from, next) => {
  const authStore = useAuthStore()

  if (await authStore.checkAuth()) {
    console.log(authStore.user)
    next({ name: authStore.user.role })
    return
  } else {
    next()
    return
  }
}
