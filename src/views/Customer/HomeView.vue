<script setup>
import HeaderItem from '@/components/HeaderItem.vue'
import ServiceItem from '@/components/Freelancer/Service/ServiceItem.vue'
import getAllServices from '@/services/Freelancer/getAllServices'
import HeaderAreaForm from '@/components/Customer/HeaderAreaForm.vue'
import Category from '@/components/CategoryItem.vue'

import moment from 'moment'
import { FwbSpinner } from 'flowbite-vue'
import { useServicesStore } from '@/stores/freelancerServices'
import { ref, onMounted } from 'vue'
const serviceStore = useServicesStore()
const loading = ref(true)
onMounted(async () => {
    if (serviceStore.allServices.length < 1) {
        const response = await getAllServices()
        if (response.success) {
            const data = response.data.data
            console.log('DATA : ', data)
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
            setTimeout(() => {
                loading.value = false
            }, 3000)
            console.log(serviceStore.allServices)
        } else {
            console.log(response.error)
            loading.value = false
        }
    }
})
</script>

<template>
    <HeaderItem
        title="Hizmet Ara"
        sub-title="Yeteneklere göre yada hizmet kategorisine göre arayın. Aradığınız hizmeti anında bulun"
    >
        <template #actionArea>
            <HeaderAreaForm></HeaderAreaForm>
        </template>
    </HeaderItem>
    <div class="flex flex-col-reverse gap-4 mb-4 lg:flex-row lg:justify-between">
        <div class="flex lg:flex-1 justify-center">
            <div class="grow">
                <div class="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                    <template v-if="loading">
                        <div class="flex col-span-2 py-16 items-center justify-center">
                            <fwb-spinner size="12" color="yellow" />
                        </div>
                    </template>

                    <template v-else>
                        <template v-for="service in serviceStore.allServices" :key="service.id">
                            <ServiceItem :service="service" />
                        </template>
                    </template>
                </div>
            </div>
        </div>

        <div class="flex-1 lg:flex-initial">
            <Category />
        </div>
    </div>
</template>
