import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref(null)
  const checkAuth = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/user', {
        credentials: 'include'
      })
      const data = await response.json()
      if (response.ok) {
        console.log('Kullanıcı giriş yapmış', data)
        user.value = data.user
        return true
      } else {
        console.warn('Kullanıcı giriş yapmamış')
        user.value = null
        return false
      }
    } catch (error) {
      console.error(error)
      return false
    }
  }
  return { user, checkAuth }
})
