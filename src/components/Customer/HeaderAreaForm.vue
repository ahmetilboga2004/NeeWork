<script setup>
import { ref } from 'vue'
import moment from 'moment'
import searchService from '@/services/Freelancer/searchService'
import { useServicesStore } from '@/stores/freelancerServices'

const serviceStore = useServicesStore()

const search = ref('')
const error = ref('')
const submitForm = async () => {
    try {
        const response = await searchService(search.value)
        if (response.success) {
            const data = response.data.data
            serviceStore.allServices = data.map((service) => ({
                id: service.id,
                title: service.title,
                shortDesc: service.shortDesc,
                details: service.details,
                price: service.price,
                status: service.status,
                publishDate: moment(service.createdAt).format('DD-MM-YYYY'),
                updatedAt: service.updatedAt,
                user: {
                    id: service.user.id,
                    meslek: service.user.meslek,
                    fullName: `${service.user.firstName} ${service.user.lastName}`,
                    email: service.user.email,
                    username: service.user.username,
                    role: service.user.role,
                    createdAt: moment(service.user.createdAt).format('DD-MM-YYYY'),
                    updatedAt: service.user.updatedAt
                }
            }))
        } else {
            console.log(response.error)
            error.value = response.error
        }
    } catch (error) {
        console.error(error)
    }
}
</script>
<template>
    <form class="flex items-center" @submit.prevent="submitForm" novalidate>
        <label for="simple-search" class="sr-only">Ara</label>
        <div class="relative w-72">
            <input
                v-model="search"
                type="text"
                id="simple-search"
                class="border border-black text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                placeholder="İlan ara..."
                required
            />
        </div>
        <button
            type="submit"
            class="transition duration-300 p-2 px-3 ms-2 text-sm font-medium text-black border-black bg-navbar rounded-lg border border-yellow hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-yellow-200"
        >
            <i class="fa-solid fa-magnifying-glass"></i>
            <span class="sr-only">Search</span>
        </button>
    </form>
</template>
