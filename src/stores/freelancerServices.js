import { ref } from 'vue'
import { defineStore } from 'pinia'
import getAllServices from '@/services/Freelancer/getAllServices'

export const useServicesStore = defineStore('servicesStore', () => {
    const service = ref({})
    const popularServices = ref([])
    const filteredServices = ref([])
    const allServices = ref([])

    const allServiceUpdate = async () => {
        try {
            const response = await getAllServices()
            if (response.success) {
                const data = response.data.data
                allServices.value = data
            }
        } catch (error) {
            console.error(error)
        }
    }

    return { allServices, filteredServices, popularServices, service, allServiceUpdate }
})
