import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFlashStore = defineStore('flashMessage', () => {
  const showFlashMessage = ref(false)
  const message = ref('')
  const type = ref('')
  const setFlashMessage = (userMsg, msgType) => {
    showFlashMessage.value = true
    message.value = userMsg
    type.value = msgType
    setTimeout(() => {
      clearFlashMessage()
    }, 5000)
  }
  const clearFlashMessage = () => {
    message.value = ''
    showFlashMessage.value = false
  }
  return { showFlashMessage, message, type, setFlashMessage, clearFlashMessage }
})
