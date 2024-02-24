import { useAuthStore } from '@/stores/auth'

export default async (to, from, next) => {
  const authStore = useAuthStore()
  await authStore.checkAuth()
  if (!authStore.user) {
    console.log(authStore.user)
    next({
      name: 'login',
      query: { redirect: to.fullPath } // Kullanıcının gitmek istediği sayfayı hatırlamak için query parametresini kullanırız
    })
    return
  } else {
    next()
    return
  }
}
