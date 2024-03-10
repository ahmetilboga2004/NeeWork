import { ref } from 'vue'
import { defineStore } from 'pinia'
import getAllJobs from '@/services/Customer/getAllJobs'

export const useJobsStore = defineStore('jobsStore', () => {
  const allJobs = ref([])
  const popularJobs = ref([])
  const allJobsUpdate = async () => {
    try {
      const response = await getAllJobs()
      if (response.success) {
        const data = response.data.data
        allJobs.value = data
      }
    } catch (error) {
      console.error(error)
    }
  }

  const job = ref({})

  return { allJobs, popularJobs, job, allJobsUpdate }
})
