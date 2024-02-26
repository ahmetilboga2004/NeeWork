import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useServicesStore = defineStore('servicesStore', () => {
  const allServices = ref([])
  return { allServices }
})
