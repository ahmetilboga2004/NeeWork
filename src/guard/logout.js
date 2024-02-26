import { useAuthStore } from '@/stores/auth'

export default async (to, from, next) => {
  const authStore = useAuthStore()
  try {
    const response = await fetch('http://localhost:3000/auth/logout', {
      credentials: 'include'
    })
    const data = await response.json()
    if (response.ok) {
      console.log('Çıkış işlemi başarılı bir şkeilde gerçekleşti', data)
      authStore.user = null
      next({ name: 'home' })
      return
    }
  } catch (error) {
    console.error(error)
    next({ name: 'home' })
    return
  }
}
